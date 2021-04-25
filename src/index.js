import './css/base.scss';
import apiCalls from './api-calls.js';
import domUpdates from './dom-updates.js';
import dropdownMenu from './dom-updates.js';
import bookingButton from './dom-updates.js';
import Traveler from './Traveler';

let currentTraveler, travelerData, tripData, destinationData;
const formButton = document.querySelector('#submitForm');



window.addEventListener('load', onStartup);
formButton.addEventListener('click', checkForm);
bookingButton.addEventListener('click', () => {
  createNewTripRequest(traveler, allTripsData, allDestinationsData)
})


function onStartup() {
  apiCalls.getData()
  .then(allData => {
    travelerData = allData[0].travelers;
    tripData = allData[1].trips;
    console.log(tripData);
    destinationData = allData[2].destinations; 
    console.log(destinationData); 
    currentTraveler = new Traveler(travelerData[0], tripData, destinationData);
    domUpdates.greetUser(currentTraveler);
    domUpdates.displayTrips(currentTraveler);
    domUpdates.displayYearlySpending(currentTraveler);
    domUpdates.getDestinationsInDropdown(destinationData);
    // createNewTripRequest(currentTraveler, tripData, destinationData);
  });
}

function checkForm(event) {
  event.preventDefault();
  domUpdates.checkValidation();
  if (domUpdates.checkValidation()) {
    submitForm()
  }
}

function createNewTripRequest(currentTraveler, tripData, destinationData) {
const travelDate = new Date(startDateInput.value);
const matchingDestination = allDestinationsData.filter(destination => destination.destination === dropdownMenu.value);
console.log(matchingDestination);
}

