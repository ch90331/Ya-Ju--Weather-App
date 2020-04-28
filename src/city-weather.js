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
       hour=`0${hour}`;
    }
    let min=update.getMinutes();
    if(min<10){
       min=`0${min}`;
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
   let roundCelsiusTemperature1= Math.round(celsiusTemperature1)
   if (roundCelsiusTemperature1<=0){
    document.querySelector("#action").innerHTML=`Don't forget your🧤, 🧣 and 🧥 when you go out!`;
    document.querySelector("#app").classList.add("freezingCold");
    document.querySelector("#app").classList.remove("cold");
    document.querySelector("#app").classList.remove("cool");
    document.querySelector("#app").classList.remove("comfortable");
    document.querySelector("#app").classList.remove("hot");
   }else if (0<roundCelsiusTemperature1 && roundCelsiusTemperature1<=10){
    document.querySelector("#action").innerHTML=`Stay indoors to have 🍵 or ☕!`;
    document.querySelector("#app").classList.remove("freezingCold");
    document.querySelector("#app").classList.add("cold");
    document.querySelector("#app").classList.remove("cool");
    document.querySelector("#app").classList.remove("comfortable");
    document.querySelector("#app").classList.remove("hot");
   }else if (10<roundCelsiusTemperature1 && roundCelsiusTemperature1<=20){
    document.querySelector("#action").innerHTML=`A jacket 🧥 is still needed!`;
    document.querySelector("#app").classList.remove("freezingCold");
    document.querySelector("#app").classList.remove("cold");
    document.querySelector("#app").classList.add("cool");
    document.querySelector("#app").classList.remove("comfortable");
    document.querySelector("#app").classList.remove("hot");
   }else if (20<roundCelsiusTemperature1 && roundCelsiusTemperature1<=30){
    document.querySelector("#action").innerHTML=`Comfortable temperature to plan some activities 🚵🏻‍♀️🧘🏻‍♀️🧗🏻‍♀️!`;
    document.querySelector("#app").classList.remove("freezingCold");
    document.querySelector("#app").classList.remove("cold");
    document.querySelector("#app").classList.remove("cool");
    document.querySelector("#app").classList.add("comfortable");
    document.querySelector("#app").classList.remove("hot");
   }else if (roundCelsiusTemperature1>30){
    document.querySelector("#action").innerHTML=`Find a way to cool yourself down😋!`;

    var newImg2= document.createElement(`img`);
    newImg2.setAttribute(`src`,`images/Taiwan_Beer.png`);
    newImg2.style.width="90px";
    newImg2.style.height="100px";
    var addHere2=document.getElementById("action");
    addHere2.appendChild(newImg2);

    document.querySelector("#app").classList.remove("freezingCold");
    document.querySelector("#app").classList.remove("cold");
    document.querySelector("#app").classList.remove("cool");
    document.querySelector("#app").classList.remove("comfortable");
    document.querySelector("#app").classList.add("hot");
   }

   let updateCondition=document.querySelector("#condition");
   updateCondition.innerHTML=`${response.data.weather[0].description}`;
   document.querySelector("#humidity").innerHTML=`${response.data.main.humidity}`;
   document.querySelector("#wind").innerHTML=`${response.data.wind.speed}`;
   document.querySelector("#iconElement").setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
   document.querySelector("#time").innerHTML=formatTime(response.data.dt*1000);
   document.querySelector("#date").innerHTML=formatDate(response.data.dt*1000);
}

function displayForecast(response){

    celsiusTemperatureForecastH1= response.data.list[0].main.temp_max;
    celsiusTemperatureForecastH2= response.data.list[1].main.temp_max;
    celsiusTemperatureForecastH3= response.data.list[2].main.temp_max;
    celsiusTemperatureForecastH4= response.data.list[3].main.temp_max;
    celsiusTemperatureForecastH5= response.data.list[4].main.temp_max;
    celsiusTemperatureForecastH6= response.data.list[5].main.temp_max;
    celsiusTemperatureForecastL1= response.data.list[0].main.temp_min;
    celsiusTemperatureForecastL2= response.data.list[1].main.temp_min;
    celsiusTemperatureForecastL3= response.data.list[2].main.temp_min;
    celsiusTemperatureForecastL4= response.data.list[3].main.temp_min;
    celsiusTemperatureForecastL5= response.data.list[4].main.temp_min;
    celsiusTemperatureForecastL6= response.data.list[5].main.temp_min;

    document.querySelector("#tempH1").innerHTML=`${Math.round(celsiusTemperatureForecastH1)}`;
    document.querySelector("#tempH2").innerHTML=`${Math.round(celsiusTemperatureForecastH2)}`;
    document.querySelector("#tempH3").innerHTML=`${Math.round(celsiusTemperatureForecastH3)}`;
    document.querySelector("#tempH4").innerHTML=`${Math.round(celsiusTemperatureForecastH4)}`;
    document.querySelector("#tempH5").innerHTML=`${Math.round(celsiusTemperatureForecastH5)}`;
    document.querySelector("#tempH6").innerHTML=`${Math.round(celsiusTemperatureForecastH6)}`;
    document.querySelector("#tempL1").innerHTML=`${Math.round(celsiusTemperatureForecastL1)}`;
    document.querySelector("#tempL2").innerHTML=`${Math.round(celsiusTemperatureForecastL2)}`;
    document.querySelector("#tempL3").innerHTML=`${Math.round(celsiusTemperatureForecastL3)}`;
    document.querySelector("#tempL4").innerHTML=`${Math.round(celsiusTemperatureForecastL4)}`;
    document.querySelector("#tempL5").innerHTML=`${Math.round(celsiusTemperatureForecastL5)}`;
    document.querySelector("#tempL6").innerHTML=`${Math.round(celsiusTemperatureForecastL6)}`;
    document.querySelector("#icon1").setAttribute("src",`http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`);
    document.querySelector("#icon2").setAttribute("src",`http://openweathermap.org/img/wn/${response.data.list[1].weather[0].icon}@2x.png`);
    document.querySelector("#icon3").setAttribute("src",`http://openweathermap.org/img/wn/${response.data.list[2].weather[0].icon}@2x.png`);
    document.querySelector("#icon4").setAttribute("src",`http://openweathermap.org/img/wn/${response.data.list[3].weather[0].icon}@2x.png`);
    document.querySelector("#icon5").setAttribute("src",`http://openweathermap.org/img/wn/${response.data.list[4].weather[0].icon}@2x.png`);
    document.querySelector("#icon6").setAttribute("src",`http://openweathermap.org/img/wn/${response.data.list[5].weather[0].icon}@2x.png`);
    document.querySelector("#time1").innerHTML= `${formatTime(response.data.list[0].dt*1000)}`;
    document.querySelector("#time2").innerHTML= `${formatTime(response.data.list[1].dt*1000)}`;
    document.querySelector("#time3").innerHTML= `${formatTime(response.data.list[2].dt*1000)}`;
    document.querySelector("#time4").innerHTML= `${formatTime(response.data.list[3].dt*1000)}`;
    document.querySelector("#time5").innerHTML= `${formatTime(response.data.list[4].dt*1000)}`;
    document.querySelector("#time6").innerHTML= `${formatTime(response.data.list[5].dt*1000)}`;
}

function searchInitial(city){
    document.querySelector("h1").innerHTML=`${city}`;
    let apiKey=`2705c3833e0eb8cc3d104831dddd5c14`;
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);

    apiUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
}

function showCity(event){
    event.preventDefault();
    let apiKey=`2705c3833e0eb8cc3d104831dddd5c14`;
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${document.querySelector("#form-text").value}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);

    apiUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${document.querySelector("#form-text").value}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
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

    apiUrl=`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
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

   let roundCelsiusTemperature1= Math.round(celsiusTemperature1)
   if (roundCelsiusTemperature1<=0){
    document.querySelector("#action").innerHTML=`Don't forget your🧤, 🧣 and 🧥 when you go out!`;
    document.querySelector("#app").classList.add("freezingCold");
    document.querySelector("#app").classList.remove("cold");
    document.querySelector("#app").classList.remove("cool");
    document.querySelector("#app").classList.remove("comfortable");
    document.querySelector("#app").classList.remove("hot");
   }else if (0<roundCelsiusTemperature1 && roundCelsiusTemperature1<=10){
    document.querySelector("#action").innerHTML=`Stay indoors to have 🍵 or ☕!`;
    document.querySelector("#app").classList.remove("freezingCold");
    document.querySelector("#app").classList.add("cold");
    document.querySelector("#app").classList.remove("cool");
    document.querySelector("#app").classList.remove("comfortable");
    document.querySelector("#app").classList.remove("hot");
   }else if (10<roundCelsiusTemperature1 && roundCelsiusTemperature1<=20){
    document.querySelector("#action").innerHTML=`A jacket is still needed!`;
    document.querySelector("#app").classList.remove("freezingCold");
    document.querySelector("#app").classList.remove("cold");
    document.querySelector("#app").classList.add("cool");
    document.querySelector("#app").classList.remove("comfortable");
    document.querySelector("#app").classList.remove("hot");
   }else if (20<roundCelsiusTemperature1 && roundCelsiusTemperature1<=30){
    document.querySelector("#action").innerHTML=`Comfortable temperature to plan some activities 🚵🏻‍♀️🧘🏻‍♀️🧗🏻‍♀️!`;
    document.querySelector("#app").classList.remove("freezingCold");
    document.querySelector("#app").classList.remove("cold");
    document.querySelector("#app").classList.remove("cool");
    document.querySelector("#app").classList.add("comfortable");
    document.querySelector("#app").classList.remove("hot");
   }else if (roundCelsiusTemperature1>30){
    document.querySelector("#action").innerHTML=`Find a way to cool yourself down!`;
    var newImg1= document.createElement(`img`);
    newImg1.setAttribute(`src`,`images/Mango_Shaved_Ice.png`);
    newImg1.style.width="90px";
    newImg1.style.height="100px";
    var addHere1=document.getElementById("action");
    addHere1.appendChild(newImg1);
    document.querySelector("#app").classList.remove("freezingCold");
    document.querySelector("#app").classList.remove("cold");
    document.querySelector("#app").classList.remove("cool");
    document.querySelector("#app").classList.remove("comfortable");
    document.querySelector("#app").classList.add("hot");
   }

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
    document.querySelector("#tempH1").innerHTML= Math.round(celsiusTemperatureForecastH1*9/5+32);
    document.querySelector("#tempH2").innerHTML= Math.round(celsiusTemperatureForecastH2*9/5+32);
    document.querySelector("#tempH3").innerHTML= Math.round(celsiusTemperatureForecastH3*9/5+32);
    document.querySelector("#tempH4").innerHTML= Math.round(celsiusTemperatureForecastH4*9/5+32);
    document.querySelector("#tempH5").innerHTML= Math.round(celsiusTemperatureForecastH5*9/5+32);
    document.querySelector("#tempH6").innerHTML= Math.round(celsiusTemperatureForecastH6*9/5+32);
    document.querySelector("#tempL1").innerHTML= Math.round(celsiusTemperatureForecastL1*9/5+32);
    document.querySelector("#tempL2").innerHTML= Math.round(celsiusTemperatureForecastL2*9/5+32);
    document.querySelector("#tempL3").innerHTML= Math.round(celsiusTemperatureForecastL3*9/5+32);
    document.querySelector("#tempL4").innerHTML= Math.round(celsiusTemperatureForecastL4*9/5+32);
    document.querySelector("#tempL5").innerHTML= Math.round(celsiusTemperatureForecastL5*9/5+32);
    document.querySelector("#tempL6").innerHTML= Math.round(celsiusTemperatureForecastL6*9/5+32);
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
    document.querySelector("#tempH1").innerHTML= Math.round(celsiusTemperatureForecastH1);
    document.querySelector("#tempH2").innerHTML= Math.round(celsiusTemperatureForecastH2);
    document.querySelector("#tempH3").innerHTML= Math.round(celsiusTemperatureForecastH3);
    document.querySelector("#tempH4").innerHTML= Math.round(celsiusTemperatureForecastH4);
    document.querySelector("#tempH5").innerHTML= Math.round(celsiusTemperatureForecastH5);
    document.querySelector("#tempH6").innerHTML= Math.round(celsiusTemperatureForecastH6);
    document.querySelector("#tempL1").innerHTML= Math.round(celsiusTemperatureForecastL1);
    document.querySelector("#tempL2").innerHTML= Math.round(celsiusTemperatureForecastL2);
    document.querySelector("#tempL3").innerHTML= Math.round(celsiusTemperatureForecastL3);
    document.querySelector("#tempL4").innerHTML= Math.round(celsiusTemperatureForecastL4);
    document.querySelector("#tempL5").innerHTML= Math.round(celsiusTemperatureForecastL5);
    document.querySelector("#tempL6").innerHTML= Math.round(celsiusTemperatureForecastL6);
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
    document.querySelector("#tempH1").innerHTML= Math.round(celsiusTemperatureForecastH1*9/5+32);
    document.querySelector("#tempH2").innerHTML= Math.round(celsiusTemperatureForecastH2*9/5+32);
    document.querySelector("#tempH3").innerHTML= Math.round(celsiusTemperatureForecastH3*9/5+32);
    document.querySelector("#tempH4").innerHTML= Math.round(celsiusTemperatureForecastH4*9/5+32);
    document.querySelector("#tempH5").innerHTML= Math.round(celsiusTemperatureForecastH5*9/5+32);
    document.querySelector("#tempH6").innerHTML= Math.round(celsiusTemperatureForecastH6*9/5+32);
    document.querySelector("#tempL1").innerHTML= Math.round(celsiusTemperatureForecastL1*9/5+32);
    document.querySelector("#tempL2").innerHTML= Math.round(celsiusTemperatureForecastL2*9/5+32);
    document.querySelector("#tempL3").innerHTML= Math.round(celsiusTemperatureForecastL3*9/5+32);
    document.querySelector("#tempL4").innerHTML= Math.round(celsiusTemperatureForecastL4*9/5+32);
    document.querySelector("#tempL5").innerHTML= Math.round(celsiusTemperatureForecastL5*9/5+32);
    document.querySelector("#tempL6").innerHTML= Math.round(celsiusTemperatureForecastL6*9/5+32);
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
    document.querySelector("#tempH1").innerHTML= Math.round(celsiusTemperatureForecastH1);
    document.querySelector("#tempH2").innerHTML= Math.round(celsiusTemperatureForecastH2);
    document.querySelector("#tempH3").innerHTML= Math.round(celsiusTemperatureForecastH3);
    document.querySelector("#tempH4").innerHTML= Math.round(celsiusTemperatureForecastH4);
    document.querySelector("#tempH5").innerHTML= Math.round(celsiusTemperatureForecastH5);
    document.querySelector("#tempH6").innerHTML= Math.round(celsiusTemperatureForecastH6);
    document.querySelector("#tempL1").innerHTML= Math.round(celsiusTemperatureForecastL1);
    document.querySelector("#tempL2").innerHTML= Math.round(celsiusTemperatureForecastL2);
    document.querySelector("#tempL3").innerHTML= Math.round(celsiusTemperatureForecastL3);
    document.querySelector("#tempL4").innerHTML= Math.round(celsiusTemperatureForecastL4);
    document.querySelector("#tempL5").innerHTML= Math.round(celsiusTemperatureForecastL5);
    document.querySelector("#tempL6").innerHTML= Math.round(celsiusTemperatureForecastL6);
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
let celsiusTemperatureForecastH1= null;
let celsiusTemperatureForecastH2= null;
let celsiusTemperatureForecastH3= null;
let celsiusTemperatureForecastH4= null;
let celsiusTemperatureForecastH5= null;
let celsiusTemperatureForecastH6= null;
let celsiusTemperatureForecastL1= null;
let celsiusTemperatureForecastL2= null;
let celsiusTemperatureForecastL3= null;
let celsiusTemperatureForecastL4= null;
let celsiusTemperatureForecastL5= null;
let celsiusTemperatureForecastL6= null;




searchInitial("porto");