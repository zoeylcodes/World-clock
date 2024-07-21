function updateTime(){


let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement){
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime=moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small]");
}


let stockholmElement = document.querySelector("#stockholm");
if (stockholmElement){
let stockholmDateElement = stockholmElement.querySelector(".date");
let stockholmTimeElement = stockholmElement.querySelector(".time");
let stockholmTime = moment().tz("Europe/Stockholm");
stockholmDateElement.innerHTML = stockholmTime.format("MMMM Do YYYY");
stockholmTimeElement.innerHTML = stockholmTime.format("h:mm:ss [<small>]A[</small>]");

}

let rabatElement = document.querySelector("#rabat");
if (rabatElement){
let rabatDateElement = rabatElement.querySelector(".date");
let rabatTimeElement = rabatElement.querySelector(".time");
let rabatTime = moment().tz("Africa/Casablanca");
rabatDateElement.innerHTML = rabatTime.format("MMMM Do YYYY");
rabatTimeElement.innerHTML = rabatTime.format("h:mm:ss [<small>]A[</small>]");
}

let torontoElement = document.querySelector("#toronto");
if (torontoElement){
let torontoDateElement = torontoElement.querySelector(".date");
let torontoTimeElement = torontoElement.querySelector(".time");
let torontoTime = moment().tz("America/Toronto");
torontoDateElement.innerHTML = torontoTime.format("MMMM Do YYYY");
torontoTimeElement.innerHTML = torontoTime.format("h:mm:ss [<small>]A[</small>]");
}

}

function updateCity(event){
   let cityTimeZone= event.target.value;
   if (cityTimeZone === 'current'){
    cityTimeZone= moment.tz.guess();
   }
   let cityName=cityTimeZone.replace("_"," ").split("/")[1];
   let cityTime = moment().tz(cityTimeZone);
   let citiesElement= document.querySelector("#cities");
   citiesElement.innerHTML = `
        <div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
        </div>`;
}
updateTime();
setInterval (updateTime,1000);

let citiesSelectElement=document.querySelector("#city");


citiesSelectElement.addEventListener("change",updateCity);