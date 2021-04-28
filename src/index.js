import './css/base.scss';
import apiCalls from './api-calls.js';
import domUpdates from './dom-updates.js';
import Traveler from './Traveler';

let currentTraveler, travelerData, tripData, destinationData;
const allContainer = document.querySelector('.all-container');
const allTripsButton = document.querySelector('#allTrips');
const bookingButton = document.querySelector('#bookingButton');
const formButton = document.querySelector('#submitForm');
const greetingContainer = document.querySelector('#greetingContainer');
const loginButton = document.querySelector('#loginButton');
const loginContainer = document.querySelector('#loginContainer')
const loginError = document.querySelector('#loginError');
const passwordInput = document.querySelector('#password');
const pendingButton = document.querySelector('#pending');
const usernameInput = document.querySelector('#username');


const checkLogin = (event) => {
  event.preventDefault();
  let username = usernameInput.value
  let userID = username.slice(8);
  onStartup();
  if (passwordInput.value !== 'travel2020' || !passwordInput.value || !username || username.length < 9) {
    loginError.classList.remove('hidden');
  } else {
    createUser(userID);
    displayUser();
    loginContainer.classList.add('hidden');
    allContainer.classList.remove('hidden');
    greetingContainer.classList.remove('hidden');
  }
}

const createUser = id => {
  currentTraveler = new Traveler(travelerData[id], tripData, destinationData);
}

const displayUser = () => {
  domUpdates.greetUser(currentTraveler);
  domUpdates.displayAllTrips(currentTraveler);
  domUpdates.displayYearlySpending(currentTraveler);
  domUpdates.getDestinationsInDropdown(destinationData);
}

const onStartup = () => {
  apiCalls.getData()
    .then(allData => {
      travelerData = allData[0].travelers;
      tripData = allData[1].trips;
      destinationData = allData[2].destinations; 
    });
}

const checkForm = event => {
  event.preventDefault();
  if (domUpdates.checkValidation()) {
    formButton.classList.add('hidden');
    domUpdates.createNewTripRequest(currentTraveler, tripData, destinationData);
  }
}

const handleTripRequest = () => {
  domUpdates.sendTripRequest(currentTraveler);
  onStartup();
  displayUser();
  bookingButton.classList.add('hidden');
  formButton.classList.remove('hidden');
}

const viewPendingTrips = () => {
  onStartup();
  displayUser();
  domUpdates.changeToPendingTripView(currentTraveler);
}

const viewAllTrips = () => {
  domUpdates.displayAllTrips(currentTraveler);
}

loginButton.addEventListener('click', checkLogin);
window.addEventListener('load', onStartup);
formButton.addEventListener('click', checkForm);
bookingButton.addEventListener('click', handleTripRequest);
pendingButton.addEventListener('click', viewPendingTrips);
allTripsButton.addEventListener('click', viewAllTrips);