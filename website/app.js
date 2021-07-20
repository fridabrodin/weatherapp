// The URL from which we get the weather information

let baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";

// Let's make sure we show the temperature in metric

let units = "&units=metric";

// Personal API Key for OpenWeatherMap API

let apiKey = "&appid=885d1ba30dcb12cef69c5df82996c911";

// Our HTML elements

const date = document.getElementById("date");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const content = document.getElementById("content");
const entry = document.getElementById("entryHolder");
const button = document.getElementById("generate");


// Event listener to add function to existing HTML DOM element = the generate button

button.addEventListener("click", performAction);

/* Function called by event listener */

function performAction(){
  getWeather();
}

/* Function to GET Web API Data*/

async function getWeather(){
  const zip =  document.getElementById("zip").value;
  const feelings =  document.getElementById("feelings").value;

    const response = await fetch(baseURL+zip+units+apiKey)
   .then(response => response.json())
   .then(data => {
     date.innerHTML = newDate;
     city.innerHTML = data["name"] + ", " + data["sys"]["country"];
     temp.innerHTML = data["main"]["temp"] + "°C";
     content.innerHTML = "Your feelings for today:  " + feelings;
   })
   .catch(err => content.innerHTML = "Please enter a valid zip code")
   }

/* Function to POST data */

const postData = async ( url = '', data = {})=>{
  console.log(data);
    const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
   // Body data type must match "Content-Type" header
    body: JSON.stringify(data),
  });

    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    }
}

/* Function to GET Project Data */

/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
