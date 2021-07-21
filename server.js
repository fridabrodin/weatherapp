// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
// Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 8000;
const server = app.listen(port, listening);

function listening(){
    console.log("server running")
    console.log(`running on localhost: ${port}`);
}

// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// GET route that returns project data
app.get("/all", function (req, res) {
    res.send(projectData);
});

// Post route that adds incoming data to projectData

const data = []

app.post("/addMovie", addMovie);

function addMovie (req, res) {
console.log(req.body);
    newEntry = {
        city: req.body.city,
        temp: req.body.temp,
        content: req.body.feelings,
    }

    console.log(req.body);
    data.push(req.body);
  }