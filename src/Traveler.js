import TripRepo from './Trip-Repo';

class Traveler {
  constructor(allTravelersData) {
    this.id = allTravelersData.id;
    this.name = allTravelersData.name;
    this.travelerType = allTravelersData.travelerType;
  }
}



export default Traveler;