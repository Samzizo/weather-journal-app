projectData = {};
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
app.use(express.static('website'));
const port = 3000;
const server = app.listen(port, listening);
function listening(){
    console.log(`running on localhost: ${port}`);
};
app.get('/all', sendData);
function sendData (req, res) {
    res.send(projectData);
};
app.post('/add', callback);
function callback(req, res){
	projectData = {
		temperature: req.body.temperature,
		date: req.body.date,
		userResponse: req.body.userResponse
	}
	res.send(projectData);
}