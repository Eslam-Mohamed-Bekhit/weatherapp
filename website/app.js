
/* Global Variables */
//URL API Key for OpenWeatherMap API
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip=`;
const apikey = ',&appid=8ae0f118aaf17dfa13f7404cc4a81498&units=metric';
//Dom elements
const zipcode = document.getElementById('zip');
const generate = document.getElementById('generate');
const feelings = document.getElementById('feelings');
const content = document.getElementById('content');
const date = document.getElementById('date');
const errorMsg = document.getElementById('error-msg');
const title = document.querySelector('.title')
const temp = document.getElementById('temp');
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1 )+ '/' + d.getDate() + '/' + d.getFullYear();
/* Function called by event listener */
const mainFunction = () => {
    getDataFromApi(`${baseUrl}${zipcode.value}${apikey}`)
        .then(
            data => postDataToServer(`/add`, data)
        ).then(
            () => updateUI(`/all`)
        )
};
/* Function to GET Web API Data*/
const getDataFromApi = async (url = '') => {
    const response = await fetch(url);
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('error', error);
    }
}
/* Function to POST data */
const postDataToServer = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...data, newDate, feelings: feelings.value }),
    });
    try {
        const data = response.json();
        return data;
    } catch (error) {
        console.log('error', error);
    }s
}

/* Function to Update DOM*/
const updateUI = async (url = '') => {
    const response = await fetch(url);
    try {
        const data = await response.json();
        title.innerHTML = data.cod == 200 ? 'Most Recent Entry' : '';
        content.innerHTML = data.cod == 200 && feelings.value ? `Your feeling : ${data?.feelings}` : '';
        temp.innerHTML = data.cod == 200 ? ` ${data?.name}&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;${data?.main?.temp}  &#8451;` : '';
        date.innerHTML = data.cod == 200 ? `Date : ${data?.newDate}` : '';
        errorMsg.innerHTML = data?.message || '';
        feelings.value = data.cod == 200 ? '' : feelings.value;
    } catch (error) {
        console.log('error', error);
    }
}

// Remove error massage when  
zipcode.addEventListener('focus', () => errorMsg.innerHTML = '');
// Event listener to add function to existing HTML DOM element
generate.addEventListener('click', mainFunction);