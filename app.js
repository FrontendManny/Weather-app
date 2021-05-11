
// API Key
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";




// Functions
getWeatherData = (city) => {
  const URL = 'https://api.openweathermap.org/data/2.5/weather';
const fullUrl = `${URL}?q=${city}&appid=${API_KEY}&units=imperials`;
let getPromisedWeather = fetch(fullUrl)
getPromisedWeather.then((response)=>{
    return response.json();
}).then((resData)=>{
    showWeatherData(resData);
}).catch((resData)=>{
    console.log('error');
    console.log(resData);
})

}

searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  if (city) {
    getWeatherData(city);
  } else {
    let CityName = document.querySelector('#city-name');
    CityName.innerText = 'Enter Location Please';
  }
  // functionality given if location was not given in the user Input 
}

showWeatherData = (weatherData) => {
  //CODE GOES HERE
  let CityName = document.querySelector('#city-name');
  let WeatherType = document.querySelector('#weather-type');
  let WeatherTemp = document.querySelector('#temp');
  let WeatherTempMin = document.querySelector('#min-temp');
  let WeatherTempMax = document.querySelector('#max-temp');

  CityName.innerText = weatherData.name;
  WeatherType.innerText = weatherData.weather[0].main;
  WeatherTemp.innerText = weatherData.main.temp;
  WeatherTempMin.innerText = weatherData.main.temp_min;
  WeatherTempMax.innerText = weatherData.main.temp_max;
}

