import Traveler from "./Traveler";
import apiCalls from './api-calls.js';

let domUpdates = {

displayTrips(traveler) {
  const tripDisplayArea = document.querySelector('#cardContainer');
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
  // grab all trips for a user => fetched data 
  // create a function to display user trips => new instance of traveler with fetched data
  // insert innerHTML and interpolate relevant info to be displayed

};

export default domUpdates;