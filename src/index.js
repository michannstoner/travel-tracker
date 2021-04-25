import './css/base.scss';
import apiCalls from './api-calls.js';
import domUpdates from './dom-updates.js';
import Traveler from './Traveler';

export let currentTraveler, travelerData, tripData, destinationData;

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
  domUpdates.checkValidation();
  if (domUpdates.checkValidation()) {
    bookingButton.classList.remove('hidden');
  }
}

function handleTripRequest() {
domUpdates.createNewTripRequest(currentTraveler, tripData, destinationData);

}

