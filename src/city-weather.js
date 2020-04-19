document.querySelector("#city-birth").innerHTML= prompt("Where is your birthplace?");
document.querySelector("#city-living").innerHTML= prompt("Where are you living?");
document.querySelector("#nextTrip").innerHTML= prompt("Where is your next destination?");
let now= new Date();

let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day=days[now.getDay()];
let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
let month=months[now.getMonth()];
let date=now.getDate();
let year=now.getFullYear();
let hour=now.getHours();
if(hour<10){
    let hour=`0${hour}`;
}
let min=now.getMinutes();
if(min<10){
    let min=`0${min}`;
}
let currentDate=document.querySelector("#date");
currentDate.innerHTML=`${day} ${month} ${date}, ${year}`;
let currentTime=document.querySelector("#time");
currentTime.innerHTML=`${hour}:${min}`;

function showWeather(response){
   console.log(response.data);
   let city=document.querySelector("h1");
   city.innerHTML=`${response.data.name}`;
   let tempC=document.querySelector("#tempNumber");
   tempC.innerHTML=`${Math.round(response.data.main.temp)}`;
   let updateCondition=document.querySelector("#condition");
   updateCondition.innerHTML=`${response.data.weather[0].main}`;
   document.querySelector("#humidity").innerHTML=`${response.data.main.humidity}`;
   document.querySelector("#wind").innerHTML=`${response.data.wind.speed}`;
}

function searchInitial(city){
    document.querySelector("h1").innerHTML=`Porto`;
    let apiKey=`2705c3833e0eb8cc3d104831dddd5c14`;
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
}

function showCity(event){
    event.preventDefault();
    let apiKey=`2705c3833e0eb8cc3d104831dddd5c14`;
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${document.querySelector("#form-text").value}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
}

let form=document.querySelector("#search-form");
form.addEventListener("submit",showCity);


function showPosition()
{   navigator.geolocation.getCurrentPosition(retrievePosition);
    function retrievePosition(position) {
    let lat= position.coords.latitude;
    let lon= position.coords.longitude;
    let apiKey=`2705c3833e0eb8cc3d104831dddd5c14`;
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showCurrentWeather);
   }
   function showCurrentWeather(response){
   let where= document.querySelector("h1");
   where.innerHTML=`${response.data.name}`;
   let tempC=document.querySelector("#tempNumber");
   tempC.innerHTML=`${Math.round(response.data.main.temp)}`;
   let updateCondition=document.querySelector("#condition");
   updateCondition.innerHTML=`${response.data.weather[0].main}`;
   document.querySelector("#humidity").innerHTML=`${response.data.main.humidity}`;
   document.querySelector("#wind").innerHTML=`${response.data.wind.speed}`;
   }
}

function retrievePosition(position) {
    let lat= position.coords.latitude;
    let lon= position.coords.longitude;
    let apiKey=`2705c3833e0eb8cc3d104831dddd5c14`;
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showCurrentWeather);
}

let place= document.querySelector("#currentLocation");
place.addEventListener("click", showPosition);

searchInitial("porto");