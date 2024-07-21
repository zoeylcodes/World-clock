function updateTime(){


let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime=moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss SS[<small>]A[</small]");


let stockholmElement = document.querySelector("#stockholm");
let stockholmDateElement = stockholmElement.querySelector(".date");
let stockholmTimeElement = stockholmElement.querySelector(".time");
let stockholmTime = moment().tz("Europe/Stockholm");
stockholmDateElement.innerHTML = stockholmTime.format("MMMM Do YYYY");
stockholmTimeElement.innerHTML = stockholmTime.format("h:mm:ss SS[<small>]A[</small>]");

let rabatElement = document.querySelector("#rabat");
let rabatDateElement = rabatElement.querySelector(".date");
let rabatTimeElement = rabatElement.querySelector(".time");
let rabatTime = moment().tz("Africa/Casablanca");
rabatDateElement.innerHTML = rabatTime.format("MMMM Do YYYY");
rabatTimeElement.innerHTML = rabatTime.format("h:mm:ss SS[<small>]A[</small>]");

let torontoElement = document.querySelector("#toronto");
let torontoDateElement = torontoElement.querySelector(".date");
let torontoTimeElement = torontoElement.querySelector(".time");
let torontoTime = moment().tz("America/Toronto");
torontoDateElement.innerHTML = torontoTime.format("MMMM Do YYYY");
torontoTimeElement.innerHTML = torontoTime.format("h:mm:ss SS[<small>]A[</small>]");

}
updateTime();
setInterval (updateTime,1);

