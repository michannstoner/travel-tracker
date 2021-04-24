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
    const yearlyTripCost = this.tripData.filter(trip => {
      let travelDates = trip.date;
      if (new Date(travelDates).getFullYear() === 2020) {
        return trip;
      }
    });
    const totalYearSpent = yearlyTripCost.reduce((total, curTrip) => {
      total += curTrip.calculateTripCost();
      return total;
    }, 0);
    return totalYearSpent;
  }
}

export default Traveler;