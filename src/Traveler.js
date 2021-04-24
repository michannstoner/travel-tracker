import TripRepo from './Trip-Repo';

class Traveler {
  constructor(allTravelersData, allTripsData, destinationData) {
    this.id = allTravelersData.id;
    this.name = allTravelersData.name;
    this.travelerType = allTravelersData.travelerType;
    this.tripData = this.getAllUserTrips(allTripsData, destinationData);
  }

  getAllUserTrips(allTripsData, destinationData) {
    let allTrips = [];
    const userTrips = allTripsData.filter(trip => {
      if (trip.userID === this.id) {
        const newTrip = new TripRepo(trip, destinationData);
        allTrips.push(newTrip);
      }
    });
    return allTrips;
  }

  calculateSpentThisYear() {
  console.log(this.tripData)
    let yearlyTripCost = this.tripData.filter(trip => {
      let travelDates = trip.date;
      // console.log(travelDates)
      if (new Date(travelDates).getFullYear() === 2020) {
        // console.log(trip)
      }
    })
  
  }

  getDate(date) {
    // const year = date.getFullYear();
    // const month = date.getFullMonth();
    // const day = today.getDate();
    const today = new Date();
    const justDay = today.getDate();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const fullDate = `${year}/${month}/${justDay}`
    console.log(fullDate);

  }


}

export default Traveler;