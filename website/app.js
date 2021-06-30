/* Global Variables */
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=33821d55ca5d3c735466c594cb39326f&units=metric';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
//entryholder divs
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');
//ASYNC get from API
const retrieveData = async (baseUrl, zip, apiKey) => {
	const request = await fetch(baseUrl + zip + apiKey);
	try {
		const receivedData =  await request.json();
		console.log(receivedData);
		return receivedData;
	} catch (error) {
		console.log('error', error);
	}
}

//ASYNC get from Local
const updateUI = async () => {
    const request = await fetch("/all");
    try {
        const allData = await request.json();
        document.querySelector("#date").innerHTML = "Date: " + allData.date;
        document.querySelector("#temp").innerHTML = "Temprature: " + allData.temperature + " K";
        document.querySelector("#content").innerHTML = "Feeling " + allData.userResponse;
    } catch (error) {
        console.log("error", error);
    }
};
//ASYNC post
const postData = async (url ='', data = {}) => {
	const response = await fetch(url, {
		method: 'POST',
		credentials: 'same-origin',
		headers : {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	try {
		const newData = await response.json();
		return newData;
	} catch (error) {
		console.log('error', error);
	}
}
//CHAIN: post & get
document.getElementById('generate').addEventListener('click', postRetrieve);
function postRetrieve() {
	//get user input
	let zip = document.getElementById('zip').value;
	let feeling = document.getElementById('feelings').value;
	retrieveData(baseUrl, zip, apiKey) //get data from api
  .then(function (data) {
    postData("/add", {
      //bundle user data and api, and store
      temperature: data.main.temp,
      date: newDate,
      userResponse: feeling,
    }).then(function () {
      updateUI("/data");
    });
  });
}