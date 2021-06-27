// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;

//Spin up the server
const server = app.listen(port, listening);

// call out to debug
function listening(){
    console.log("I'm running :)");
    console.log(`running on localhost: ${port}`);
};

// GET route
app.get('/all', sendData);

//function to complete get "all"
function sendData (req, res) {
    res.send(projectData);
    projectData = [];
};

// POST route
app.post('/add', callBack);

function callBack(req, res){
    console.log(req.body)

    newData = {
        data: req.body.date,
        temp: req.body.temp,
        content: req.body.content
    }
    
    projectData.push(newData);
}