# Weather-Journal-app Project

## Table of Contents


* [Description](#Description)
* [Usage](#Usage)
* [Dependencies](#Dependencies)
* [Purposes](#Purposes)

## Description 

Weather-Journal-app has :
* website folder ;
1. HTML file .
2. CSS styling file .
3. JavaScript file .
* server.js file.
* node_module folder .
* package-lock.json file .
* package.json file .
* README.md file .


## Usage

* To get run project , need Node Environement to run local server on port with server file which use express module.
* To get  wheather temperture for state in US just use  Zipcode to get temp with celsius degree .

## Dependencies 

* In file `js/app.js`I dependence on use some of **ES6** and **ES7** .
* In this app  with server site dependence on :
- "body-parser" : "^1.19.0".
- "cors": "^2.8.5".
- "express": "^4.17.1".

## Purposes

The project fulfill more of Required goals :

* setup a server with GET and POST routessetup a server with GET and POST routes.
* create developer credentials for a Web APIcreate developer credentials for a Web API.
* use the Fetch API with my credentials and user input to get dynamic data into my app routes.
* access a GET route on the server side, from a function called on the client side.
* chain Promises together.
* access HTML elements with JavaScript and set their properties dynamically.
* Install the packages Express, Body-Parser and Cors from the terminal and them  include them your server.js file
* Create a server running on the port of your choosing
* Use console.log() to the server callback fuction test server, run the file server.js.
* The POST route should anticipate receiving three pieces of data from the request body  :
- temperature
- date
- user response.
* Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
* Inside that callback function call your async GET request with the parameters:
- base url
- user entered zip code .
- personal API key.
* chain another Promise that updates the UI dynamically Write another async function that is called after the completed POST request.
* Code Quality easy-to-reads