document.querySelector("#city-birth").innerHTML= prompt("Where is your birthplace?");
document.querySelector("#city-living").innerHTML= prompt("Where are you living?");
document.querySelector("#nextTrip").innerHTML= prompt("Where is your next destination?");

function formatDate(timestamp){
    let update=new Date(timestamp);
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day=days[update.getDay()];
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month=months[update.getMonth()];
    let date=update.getDate();
    let year=update.getFullYear();
    return `${day} ${month} ${date}, ${year}`;
}

function formatTime(timestamp){
    let update=new Date(timestamp);
    let hour=update.getHours();
    if(hour<10){
    let hour=`0${hour}`;
    }
    let min=update.getMinutes();
    if(min<10){
    let min=`0${min}`;
    }
    return `${hour}:${min}`;
}
function showWeather(response){
   console.log(response.data);
   let city=document.querySelector("h1");
   city.innerHTML=`${response.data.name}`;
   let tempC=document.querySelector("#tempNumber");
   tempC.innerHTML=`${Math.round(response.data.main.temp)}`;
   let tempC1=document.querySelector("#tempNumber1");
   tempC1.innerHTML=`${Math.round(response.data.main.feels_like)}`;
   let updateCondition=document.querySelector("#condition");
   updateCondition.innerHTML=`${response.data.weather[0].description}`;
   document.querySelector("#humidity").innerHTML=`${response.data.main.humidity}`;
   document.querySelector("#wind").innerHTML=`${response.data.wind.speed}`;
   document.querySelector("#iconElement").setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
   document.querySelector("#time").innerHTML=formatTime(response.data.dt*1000);
   document.querySelector("#date").innerHTML=formatDate(response.data.dt*1000);
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
   let tempC1=document.querySelector("#tempNumber1");
   tempC1.innerHTML=`${Math.round(response.data.main.feels_like)}`;
   let updateCondition=document.querySelector("#condition");
   updateCondition.innerHTML=`${response.data.weather[0].description}`;
   document.querySelector("#humidity").innerHTML=`${response.data.main.humidity}`;
   document.querySelector("#wind").innerHTML=`${response.data.wind.speed}`;
   document.querySelector("#iconElement").setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
   document.querySelector("#time").innerHTML=formatTime(response.data.dt*1000);
   document.querySelector("#date").innerHTML=formatDate(response.data.dt*1000);
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