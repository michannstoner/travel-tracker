import './css/base.scss';
// import main from './css/main.scss';
import apiCalls from './api-calls.js';
import domUpdates from './dom-updates.js';
import Traveler from './Traveler';
let currentTraveler, travelerData, tripData, destinationData;

const formButton = document.querySelector('#submitForm');
const bookingButton = document.querySelector('.booking-button');



window.addEventListener('load', onStartup);
formButton.addEventListener('click', checkForm);
bookingButton.addEventListener('click', handleTripRequest);


function onStartup() {
  apiCalls.getData()
  .then(allData => {
    travelerData = allData[0].travelers;
    tripData = allData[1].trips;
    destinationData = allData[2].destinations; 
    currentTraveler = new Traveler(travelerData[0], tripData, destinationData);
    domUpdates.greetUser(currentTraveler);
    domUpdates.displayTrips(currentTraveler);
    domUpdates.displayYearlySpending(currentTraveler);
    domUpdates.getDestinationsInDropdown(destinationData);
  });
}

function checkForm(event) {
  event.preventDefault();
  if (domUpdates.checkValidation()) {
    formButton.classList.add('hidden');
    domUpdates.createNewTripRequest(currentTraveler, tripData, destinationData);
  }
}

function handleTripRequest() {
  domUpdates.sendTripRequest()
  bookingButton.classList.add('hidden');
}





