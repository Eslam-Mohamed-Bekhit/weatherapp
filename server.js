// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Callback function to complete GET '/all'
const sendData = (req, res) => res.send(projectData);
// Callback function to complete POST '/add'
const updatePojectData = (req, res) => {
    projectData = req.body;
    res.send(projectData);
}
app.post('/add', updatePojectData)
app.get('/all', sendData);
// Setup Server
const port = 8000;
function listening() {
    console.log('server running');
    console.log(`running on localhost: ${port}`);
};
const server = app.listen(port, listening);
