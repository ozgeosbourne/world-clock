function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

  // Philly
  let phillyElement = document.querySelector("#philly");
  if (phillyElement) {
  let phillyDateElement = phillyElement.querySelector(".date");
  let phillyTimeElement = phillyElement.querySelector(".time");
  let phillyTime = moment().tz("America/New_York");

  phillyDateElement.innerHTML = phillyTime.format("MMMM Do YYYY");
  phillyTimeElement.innerHTML = phillyTime.format("h:mm:ss [<small>]A[</small>]"
  );
}

  // Berlin
  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
  let berlinDateElement = berlinElement.querySelector(".date");
  let berlinTimeElement = berlinElement.querySelector(".time");
  let berlinTime = moment().tz("Europe/Berlin");

  berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
  berlinTimeElement.innerHTML = berlinTime.format("h:mm:ss [<small>]A[</small>]");
}
}

 // Istanbul
  let istanbulElement = document.querySelector("#istanbul");
  if (istanbulElement) {
  let istanbulDateElement = istanbulElement.querySelector(".date");
  let istanbulTimeElement = istanbulElement.querySelector(".time");
  let istanbulTime = moment().tz("Europe/Istanbul");

  istanbulDateElement.innerHTML = istanbulTime.format("MMMM Do YYYY");
  istanbulTimeElement.innerHTML = istanbulTime.format("h:mm:ss [<small>]A[</small>]");
}


function updateCity(event) {
  let cityTimeZone = event.target.value; 
  if (cityTimeZone === "current") {
cityTimeZone = moment.tz.guess(); 
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1]; 
  let cityTime = moment().tz(cityTimeZone); 
  let citiesElement = document.querySelector("#cities"); 
  citiesElement.innerHTML = `
  <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
          "A"
          )}</small></div>
      </div>
      <a class="homepage" href="index.html">Back to default</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);