let cityBirth= prompt("Where is your birthplace?👶🏻");
document.querySelector("#city-birth").innerHTML= `${cityBirth}`;

function showCityBirth(event){
    event.preventDefault();
    searchInitial(`${cityBirth}`);
}

let cityLiving= prompt("Where are you living?🏠");
document.querySelector("#city-living").innerHTML= `${cityLiving}`;

function showCityLiving(event){
    event.preventDefault();
    searchInitial(`${cityLiving}`);
}

let cityNext= prompt("Where is your next destination?🛫");
document.querySelector("#nextTrip").innerHTML= `${cityNext}`;

function showCityNext(event){
    event.preventDefault();
    searchInitial(`${cityNext}`);
}

document.querySelector("#city-birth").addEventListener("click",showCityBirth);
document.querySelector("#city-living").addEventListener("click", showCityLiving);
document.querySelector("#nextTrip").addEventListener("click", showCityNext);

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

   celsiusTemperature= response.data.main.temp;
   celsiusTemperature1= response.data.main.feels_like;

   let tempC=document.querySelector("#tempNumber");
   tempC.innerHTML=`${Math.round(celsiusTemperature)}`;
   let tempC1=document.querySelector("#tempNumber1");
   tempC1.innerHTML=`${Math.round(celsiusTemperature1)}`;
   let updateCondition=document.querySelector("#condition");
   updateCondition.innerHTML=`${response.data.weather[0].description}`;
   document.querySelector("#humidity").innerHTML=`${response.data.main.humidity}`;
   document.querySelector("#wind").innerHTML=`${response.data.wind.speed}`;
   document.querySelector("#iconElement").setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
   document.querySelector("#time").innerHTML=formatTime(response.data.dt*1000);
   document.querySelector("#date").innerHTML=formatDate(response.data.dt*1000);
}

function searchInitial(city){
    document.querySelector("h1").innerHTML=`${city}`;
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

   celsiusTemperature= response.data.main.temp;
   celsiusTemperature1= response.data.main.feels_like;

   let tempC=document.querySelector("#tempNumber");
   tempC.innerHTML=`${Math.round(celsiusTemperature)}`;
   let tempC1=document.querySelector("#tempNumber1");
   tempC1.innerHTML=`${Math.round(celsiusTemperature1)}`;
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

function showTempF(event){
    event.preventDefault();
    let tempF=document.querySelector("#tempNumber");
    tempF.innerHTML= Math.round(celsiusTemperature*9/5+32);
    let tempF1=document.querySelector("#tempNumber1");
    tempF1.innerHTML= Math.round(celsiusTemperature1*9/5+32);
    document.querySelector("#c-link").classList.remove("active");
    document.querySelector("#c-link1").classList.remove("active");
    document.querySelector("#f-link").classList.add("active");
    document.querySelector("#f-link1").classList.add("active");
}

function showTempC(event){
    event.preventDefault();
    let tempC=document.querySelector("#tempNumber");
    tempC.innerHTML= Math.round(celsiusTemperature);
    let tempC1=document.querySelector("#tempNumber1");
    tempC1.innerHTML= Math.round(celsiusTemperature1);
    document.querySelector("#c-link").classList.add("active");
    document.querySelector("#c-link1").classList.add("active");
    document.querySelector("#f-link").classList.remove("active");
    document.querySelector("#f-link1").classList.remove("active");
}

function showTempF1(event){
    event.preventDefault();
    let tempF1=document.querySelector("#tempNumber1");
    tempF1.innerHTML= Math.round(celsiusTemperature1*9/5+32);
    let tempF=document.querySelector("#tempNumber");
    tempF.innerHTML= Math.round(celsiusTemperature*9/5+32);
    document.querySelector("#c-link").classList.remove("active");
    document.querySelector("#c-link1").classList.remove("active");
    document.querySelector("#f-link").classList.add("active");
    document.querySelector("#f-link1").classList.add("active");
}

function showTempC1(event){
    event.preventDefault();
    let tempC1=document.querySelector("#tempNumber1");
    tempC1.innerHTML= Math.round(celsiusTemperature1);
    let tempC=document.querySelector("#tempNumber");
    tempC.innerHTML= Math.round(celsiusTemperature);
    document.querySelector("#c-link").classList.add("active");
    document.querySelector("#c-link1").classList.add("active");
    document.querySelector("#f-link").classList.remove("active");
    document.querySelector("#f-link1").classList.remove("active");
}

document.querySelector("#f-link").addEventListener("click",showTempF);
document.querySelector("#c-link").addEventListener("click",showTempC);
document.querySelector("#f-link1").addEventListener("click",showTempF1);
document.querySelector("#c-link1").addEventListener("click",showTempC1);

let celsiusTemperature= null;
let celsiusTemperature1= null;



searchInitial("porto");