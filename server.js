// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

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
const server = app.listen(port, listening);

function listening() {
	console.log('I am running :)');
	console.log(`running on localhost: ${port}`);
}

//GET Route:
app.get('/all', sendData);
function sendData(req, res){
	res.send(projectData);
} 

//POST Route receiving: temperature – date – user response
app.post('/add', callback);
function callback(req, res){
	projectData = {
		temperature: req.body.temperature,
		date: req.body.date,
		userResponse: req.body.userResponse
	}
	res.send(projectData);
}

//POST new data:
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