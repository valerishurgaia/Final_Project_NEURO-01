const city = document.getElementById ('location');
const date = document.getElementById('day');
const celsiusNumber = document.getElementById('celsius_number')
const visibilityNumber = document.getElementById('visibilityNumber');
const FeelsLikeNumber = document.getElementById('FeelsLikeNumber');
const humidityNumber = document.getElementById ('humidityNumber');
const windNumber = document.getElementById('windNumber');
const addButton =document.getElementById('add_button');
const options = document.getElementById('options');
const addLocationLlabel = document.getElementById('add_location_label')
const select_city = document.getElementById('city');
const description = document.getElementById('description');



addButton.addEventListener('click', () => {
    addButton.classList.toggle('active');
    addLocationLlabel.classList.toggle('active');
    options.classList.toggle('visible')
});

function weatherInlocation () {
const api = `https://api.openweathermap.org/data/2.5/weather?q=${select_city.value}&units=metric&appid=3cf41b991f1e7904886436ac9ea90e9a`;

fetch(api)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        city.innerText = data.name;
        celsiusNumber.innerText = data.main.temp;
        visibilityNumber.innerText = data.visibility;
        FeelsLikeNumber.innerText = data.main.feels_like;
        humidityNumber.innerText = data.main.humidity;
        windNumber.innerText = data.wind.speed;
        description.innerText =data.weather[0].description;
    })
}
weatherInlocation();

select_city.addEventListener('change', () => {
    weatherInlocation();
});

// current day
const today = new Date();

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const dayOfWeek = daysOfWeek[today.getDay()];

const month = (today.getMonth() + 1).toString().padStart(2, '0');

const day = today.getDate().toString().padStart(2, '0');

const year = today.getFullYear();

date.innerText = `${dayOfWeek} ${month}/${day}/${year}`;
