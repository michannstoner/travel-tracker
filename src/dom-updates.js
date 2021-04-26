import Traveler from "./Traveler";
import apiCalls from './api-calls.js';
import tripData from './index.js';
import TripRepo from "./Trip-Repo";
let newTrip;

const bookingDisplayArea = document.querySelector('.booking-area');
const costDisplayArea = document.querySelector('#costContainer');
const dropdownMenu = document.querySelector('#destinationDropdown');
const durationInput = document.querySelector('#duration');
const errorMessage = document.querySelector('.error-message');
const greetingArea = document.querySelector('#welcomeContainer');
const numTravelersInput = document.querySelector('#numberOfTravelers');
const startDateInput = document.querySelector('#startDate');
const tripDisplayArea = document.querySelector('#cardContainer');
const quoteDisplayArea = document.querySelector('.price-quote');


let domUpdates = {
greetUser(traveler) {
const name = traveler.name.split(' ');
const firstName = name[0];
greetingArea.innerText = `Welcome, ${firstName}!`;
},

displayTrips(traveler) {
  tripDisplayArea.innerHTML = '';
  let tripInfo = '';
  if (traveler.tripData.length > 0) {
    traveler.tripData.forEach(trip => {
      tripInfo += `
      <article class='card'>
       <div class=img-container>
          <img class='destination-img' src='${trip.destination.image}' alt=${trip.destination.alt}/>
       </div>
       <h3 class='trip-title'>${trip.destination.destination}</h3>
       <p class='trip-info'>
        date: ${trip.date}<br>
          travelers: ${trip.travelers}<br>
          duration: ${trip.duration} days<br>
          lodging cost: $${trip.destination.estimatedLodgingCostPerDay} per day<br>
          flight per person: $${trip.destination.estimatedFlightCostPerPerson}<br>
          status: ${trip.status}
       </p>
     </article>
   `
    })
  }
  tripDisplayArea.insertAdjacentHTML('beforeend', tripInfo);
 },

 displayYearlySpending(traveler) {
 const yearTripCost = traveler.calculateSpentThisYear();
 costDisplayArea.innerText = `You've spent $${yearTripCost} this year!`
 },

 getDestinationsInDropdown(destination) {
  let newOption = document.createElement('option');
  newOption.text = '';
  dropdownMenu.add(newOption)
  let option; 
  destination.map(destination => {
    option = document.createElement('option');
    option.text = destination.destination;
    dropdownMenu.add(option);
  })
 },

 checkValidation() {
   let validForm;
  const dateValue = new Date(startDateInput.value).toString();
  const currentDate = new Date().toString();

  if (startDateInput.value !== dateValue || dateValue < currentDate) {
      errorMessage.classList.remove('hidden');
  } else {
    validForm = true;
  }
  if (!durationInput.value) {
      errorMessage.classList.remove('hidden');
  } else {
    validForm = true;
  }
  if (!numTravelersInput.value) {
      errorMessage.classList.remove('hidden');
  } else {
    validForm = true;
  }
  if (!dropdownMenu.value) {
      errorMessage.classList.remove('hidden');  
  } else {
    errorMessage.classList.add('hidden');
    validForm = true;
 }
    return validForm;
},

 createNewTripRequest(traveler, tripData, destinationData) {
  const travelDate = new Date(startDateInput.value);
  const dateForRequest = `${travelDate.getFullYear()}/${travelDate.getMonth() + 1}/${travelDate.getDate()}`
  const matchingDestination = destinationData.filter(destination => destination.destination === dropdownMenu.value)

  let tripRequest = {
    id: Date.now(),
    userID: traveler.id,
    destinationID: matchingDestination.map(destination => destination.id).pop(),
    travelers: parseInt(numTravelersInput.value),
    date: dateForRequest,
    duration: parseInt(durationInput.value),
    status: 'pending',
    suggestedActivities: []
  }

  newTrip = new TripRepo(tripRequest, destinationData);
  this.calculateTripCost(newTrip);
 },

 calculateTripCost(trip) {
  bookingDisplayArea.classList.remove('hidden');
  let tripCost = trip.calculateTripCost();
  quoteDisplayArea.innerText = `Estimated trip cost: $${tripCost}`
 },

 sendTripRequest() {
   fetch('http://localhost:3001/api/v1/trips', {
     method: 'Post',
     body: JSON.stringify(newTrip),
     headers: {
       'Content-type': 'application/json'
     }
   })
   quoteDisplayArea.innerText = 'Request sent to agent, check pending trips!'
   setTimeout(this.clearFormFields, 2000);
 },

 clearFormFields() {
   startDateInput.value = '';
   durationInput.value = '';
   numTravelersInput.value = '';
   dropdownMenu.value = '';
   quoteDisplayArea.innerText = '';
   
 },
};

export default domUpdates;