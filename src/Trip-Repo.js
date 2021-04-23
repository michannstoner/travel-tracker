class TripRepo {
  constructor (allTripsData, destinationData) {
    this.id = allTripsData.id;
    this.userID = allTripsData.userID;
    this.destinationID = allTripsData.destinationID;
    this.travelers = allTripsData.travelers;
    this.date = allTripsData.date;
    this.duration = allTripsData.duration;
    this.status = allTripsData.status;
    this.suggestedActivities = [];
    this.destination = destinationData.find(destination => destination.id === this.destinationID);
  }

  calculateTripCost() {
    const flightCost = this.destination.estimatedFlightCostPerPerson * this.travelers;
    const lodgingCost = this.destination.estimatedLodgingCostPerDay * this.duration * this.travelers;
    const initialTripCost = flightCost + lodgingCost;
    const agentFee = initialTripCost * 0.10;
    const finalTripCost = initialTripCost + agentFee;
    return finalTripCost;
  }
}




export default TripRepo;