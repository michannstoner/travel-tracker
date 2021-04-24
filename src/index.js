import './css/base.scss';
import apiCalls from './api-calls.js';
import domUpdates from './dom-updates.js';
import Traveler from './Traveler';

let currentTraveler, travelerData, tripData, destinationData;

window.addEventListener('load', onStartup);

function onStartup() {
  apiCalls.getData()
  .then(allData => {
    travelerData = allData[0].travelers;
    tripData = allData[1].trips;
    destinationData = allData[2].destinations;
    currentTraveler = new Traveler(travelerData[1], tripData, destinationData);
    console.log(currentTraveler);
    domUpdates.displayTrips(currentTraveler);
  });
}

