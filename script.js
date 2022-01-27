// Api key -> 0fd4b4393a96e7238e11c9b3f6c5d732

const apiKey = "0fd4b4393a96e7238e11c9b3f6c5d732";

const getData = async (cityName) => {
    let windSpeed = 0;
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
        )
    const data = await response.json();
    if(data.cod === 200){
        document.querySelector('.city-name').innerHTML = `Weather in ${cityName}`;
        document.querySelector('.temp').innerHTML = `Current Temp: ${data.main.temp}°C`;
        document.querySelector('.feels-like').innerHTML = `Feels like: ${data.main.feels_like}°C`;
        document.querySelector('.wind-speed').innerHTML = `Wind speed: ${data.wind.speed} m/s`;
    } else {
        document.querySelector('.city-name').innerHTML = `Enter correct city name`;
        document.querySelector('.temp').innerHTML = ``;
        document.querySelector('.feels-like').innerHTML = ``;
        document.querySelector('.wind-speed').innerHTML = ``;
        
    }    
}

// getData();

document.querySelector('button').addEventListener('click', () => {
    let cityName = document.querySelector('.input').value;
    if(cityName !== ''){
        getData(cityName);
    }
});

document.querySelector('input').addEventListener('keyup', (e) => {
    if(e.key === 'Enter'){
        let cityName = document.querySelector('.input').value;
        if(cityName !== ''){
            getData(cityName);
        }
        
    }
    
})