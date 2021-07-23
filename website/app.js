// What we need to create an URL from the API
let baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
let units = "&units=metric";
let apiKey = "&appid=885d1ba30dcb12cef69c5df82996c911";

// Our HTML elements
const date = document.getElementById("date");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const content = document.getElementById("content");
const button = document.getElementById("generate");

// The date
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element = the generate button
button.addEventListener("click", performAction);

/* Function called by event listener */

function performAction(e){
  const zip =  document.getElementById("zip").value;
  const feelings =  document.getElementById("feelings").value;

  getWeather(baseURL,zip,units,apiKey)
  .then (function (data){
    postData('/addWeather', {date: newDate, city:data["name"] + ", " + data["sys"]["country"], temp:data["main"]["temp"] + "°C", content:"Your feelings for today:  " + feelings})
  })
}
/* Function to GET Web API Data*/

const getWeather = async (baseURL,zip,units,apiKey)=>{
    const res = await fetch(baseURL+zip+units+apiKey)
    try {
      const data = await res.json();
      return data;
    }  catch(error) {
      console.log("error", error);
    }
  }

/* Function to POST data */

const postData = async ( url = '', data = {})=>{
  //console.log(data);
    const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
    try {
      const newData = await response.json();
      console.log(newData);
      return newData
    }catch(error) {
    console.log("error", error);
    }
}

/* Function to GET Project Data */

const allData = async (url='') =>{
  const request = await fetch(url);
  try {
  const allData = await request.json()
  }
  catch(error) {
    console.log("error", error);
  }
}

/* Function to update UI */

const updateUI = async () => {
  const request = await fetch('/all');
  try{
    const allData = await request.json();
    date.innerHTML = newDate;
    city.innerHTML = allData[0].city;
    temp.innerHTML = allData[0].temp;
    content.innerHTML = allData[0].content;;

  }catch(error){
    console.log("error", error);
  }
}
