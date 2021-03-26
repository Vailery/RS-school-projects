// DOM Elements
const time = document.querySelector('.time'),
    tHours = document.querySelector('.tHours'),
    tMin = document.querySelector('.tMin'),
    tSec = document.querySelector('.tSec'),
    greeting = document.querySelector('.greeting'),
    dat = document.querySelector('.date'),
    name = document.querySelector('.name'),
    focus = document.querySelector('.focus'),
    weatherIcon = document.querySelector('.weatherIcon'),
    temperature = document.querySelector('.temperature'),
    weatherDescription = document.querySelector('.weatherDescription'),
    city = document.querySelector('.city'),
    humidity = document.querySelector('.humidity'),
    wind = document.querySelector('.wind'),
    refreshButton = document.querySelector('.material-icons'),
    qText = document.querySelector('.qText'),
    qAuthor = document.querySelector('.qAuthor'),
    btn = document.querySelector('.btn');



//data
let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednes­day',
    'Thursday',
    'Friday',
    'Saturday'
];
let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

// current background
let currentBG;

// current hour
let currentHour;


// BG
function shuffleArray(arr) {
    const array = [...arr];
    for (let i = array.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function makeBGArray(period, dayPeriods) {
    let arr = [];
    for (let i = 1; i <= 20; i++) {
        // eslint-disable-next-line prefer-template
        arr.push(`./assets/images/${period}/${addZero(i)}.jpg`);
    }
    arr = shuffleArray(arr);
    return arr.slice(0, 24 / dayPeriods);
}

const BG_NIGHT = makeBGArray('night', 4);
const BG_MORNING = makeBGArray('morning', 4);
const BG_AFTERNOON = makeBGArray('day', 4);
const BG_EVENING = makeBGArray('evening', 4);
const BG_ALL = [...BG_NIGHT, ...BG_MORNING, ...BG_AFTERNOON, ...BG_EVENING];

// Show date
function showDate(day, month, dayOfMonth) {
    dat.innerText = `${days[day]}, ${dayOfMonth} ${months[month]}`;
}

// Set Background and Greeting
function makeUrl(path) {
    return `url("${path}")`;
}

function setBG(hour) {
    currentBG = hour;
    document.body.style.backgroundImage = makeUrl(BG_ALL[hour]);
}

// Set Background and Greeting
function setBgGreet(today) {
    const hour = today.getHours();
    const dayOfMonth = today.getDate();
    const month = today.getMonth();
    const day = today.getDay();
    showDate(day, month, dayOfMonth);
    if (hour < 6) {
        // Night
        greeting.innerText = 'Good Night, ';
    } else if (hour < 12) {
        // Morning
        greeting.innerText = 'Good Morning, ';
    } else if (hour < 18) {
        // Afternoon
        greeting.innerText = 'Good Afternoon, ';
    } else {
        // Evening
        greeting.innerText = 'Good Evening, ';
    }
}

// Change BG image
function viewBgImage(data) {
    const body = document.querySelector('body');
    const src = data;
    const img = new Image();
    img.src = src;
    img.onload = () => {
        body.style.backgroundImage = makeUrl(src);
    };
}

function getImage() {
    currentBG = (currentBG + 1) % 24;
    const imageSrc = BG_ALL[currentBG];
    viewBgImage(imageSrc);
    refreshButton.disabled = true;
    setTimeout(() => { refreshButton.disabled = false; }, 1000);
}

// Show Time
function update() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    if (!currentHour) {
        setBgGreet(today);
        setBG(hour);
        getWeather();
        currentHour = hour;
    } else if (hour > currentHour) {
        setBgGreet(today);
        viewBgImage(BG_ALL[hour]);
        getWeather();
        currentBG = hour;
        currentHour = hour;
    }

    // Output Time
    tHours.innerText = addZero(hour);
    tMin.innerText = addZero(min);
    tSec.innerText = addZero(sec);

    setTimeout(update, 1000);
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.innerText = '[Enter Name]';
        localStorage.setItem('name', '[Enter Name]');
    } else {
        name.innerText = localStorage.getItem('name');
    }
}


// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.code === 'Enter') {
            name.blur();
        }
    } else if (e.target.innerText.trim()) {
        localStorage.setItem('name', e.target.innerText);
    } else {
        e.target.innerText = localStorage.getItem('name');
    }
}

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.innerText = '[Enter Focus]';
        localStorage.setItem('focus', '[Enter Focus]');
    } else {
        focus.innerText = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.code === 'Enter') {
            focus.blur();
        }
    } else if (e.target.innerText.trim()) {
        localStorage.setItem('focus', e.target.innerText);
    } else {
        e.target.innerText = localStorage.getItem('focus');
    }
}

// Get City
function getCityName() {
    if (localStorage.getItem('city') === null) {
        city.innerText = 'Minsk';
        localStorage.setItem('city', 'Minsk');
    } else {
        city.innerText = localStorage.getItem('city');
    }
}

// Set City
function setCityName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.code === 'Enter') {
            city.blur();
        }
    } else if (e.target.innerText.trim()) {
        localStorage.setItem('city', e.target.innerText);
        getWeather();
    } else {
        e.target.innerText = localStorage.getItem('city');
    }
}

// Clear Field
function clear(e) {
    e.target.innerText = ''
}

const lang = 'en',
    APIkey = '52404ddaa649215ece842d830fc5a404'

// Weather
async function getWeather() {
    try {
        const userCity = localStorage.getItem('city') || city.innerText;
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&lang=${lang}&appid=${APIkey}&units=metric`;
        const res = await fetch(weatherUrl);
        const data = await res.json();
        weatherIcon.className = '';
        weatherIcon.classList.add('weather-icon', 'owf', `owf-${data.weather[0].id}`);
        temperature.innerText = `${data.main.temp.toFixed(0)}°C`;
        weatherDescription.innerText = data.weather[0].description;
        humidity.innerText = `Humidity: ${data.main.humidity.toFixed(0)}%`;
        wind.innerText = `Wind: ${data.wind.speed.toFixed(0)}m/s`;
    } catch (e) {
        weatherIcon.className = '';
        temperature.innerText = 'Error';
        weatherDescription.innerText = 'Did you enter the correct city?';
        humidity.innerText = 'Try again';
        wind.innerText = '';
    }
}

function generateNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
async function getQuote() {
    let qstr = '';
    let astr = '';
    let nmb = 1;
    nmb = generateNumber(100) + 1;
    const url = 'https://type.fit/api/quotes';
    try {
        const res = await fetch(url);
        const data = await res.json();
        qstr = data[nmb].text;
        astr = data[nmb].author;
        qText.innerText = `"${qstr}"`;
        qAuthor.innerText = astr || 'Witout author';
    } catch (err) {
        qText.textContent = err.message;
        qAuthor.textContent = '';
    }

}

name.addEventListener('keypress', setName)
name.addEventListener('blur', setName)
name.addEventListener('focus', clear)
focus.addEventListener('keypress', setFocus)
focus.addEventListener('blur', setFocus)
focus.addEventListener('focus', clear)
city.addEventListener('keypress', setCityName)
city.addEventListener('blur', setCityName)
city.addEventListener('focus', clear)
refreshButton.addEventListener('click', getImage)
btn.addEventListener('click', getQuote)

// Run
update()
getName()
getFocus()
getCityName()
getQuote()