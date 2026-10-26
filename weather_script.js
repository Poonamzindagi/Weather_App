const apiKey ='83b063b339897ad8bbdefaf74856716e';
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn =document.querySelector(" .search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiURL+ city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display= "none";
    }else{
        var data = await response.json();

            
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed +'km/h';

        if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/sunny.png";
        }
        else if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/partly-cloudy.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }

        document.querySelector(".weather").style.display ="block";
    }
}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

