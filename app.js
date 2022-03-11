//To pull out location of the user

window.addEventListener("load", () => {
  let lon;
  let lat;
  let timeZone = document.querySelector(".location-time-zone");
  let description = document.querySelector(".temp-description");
  let tempDegree = document.querySelector(".temp-degree");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = `https://cors-anywhere.herokuapp.com/`;
      const apiKey = `5b8832017eb5dbcfb08f7a9525e06ec8`;
      
      const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const { temperature, summary, icon } = data.currently;

          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = summary;
          locationTimezone.textContent = data.timezone.slice(
            data.timezone.indexOf("/") + 1
          );

          let celsius = (temperature - 32) * (5 / 9);
          setIcons(icon, document.querySelector(".icon"));

          temperatureSection.addEventListener("click", () => {
            if (temperatureSpan.textContent === "F") {
              temperatureSpan.textContent = "C";
              temperatureDegree.textContent = Math.floor(celsius);
            } else {
              temperatureSpan.textContent = "F";
              temperatureDegree.textContent = temperature;
            }
          });
        });
    });
  }
  
  });
