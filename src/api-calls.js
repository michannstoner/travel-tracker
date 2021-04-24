import domUpdates from "./dom-updates";

let apiCalls = {
  getAllTravelers() {
    const fetchAllTravelers = fetch('http://localhost:3001/api/v1/travelers')
      .then(response => response.json())
      .then(data => data)
    return fetchAllTravelers;
  },

  getSingleTraveler() {
    const fetchSingleTraveler = fetch('http://localhost:3001/api/v1/travelers/1')
      .then(response => response.json())
      .then(singleTravelerData => singleTravelerData)
    return fetchSingleTraveler;
  },

  getAllTrips() {
    const fetchAllTrips = fetch('http://localhost:3001/api/v1/trips')
      .then(response => response.json())
      .then(data => data)
    return fetchAllTrips; 
  },

  getAllDestinations() {
    const fetchAllDestinations = fetch('http://localhost:3001/api/v1/destinations')
      .then(response => response.json())
      .then(data => data)
    return fetchAllDestinations
  },

  getData() {
    return Promise.all([this.getAllTravelers(), this.getAllTrips(), this.getAllDestinations(), this.getSingleTraveler()])
      .then(data => data)
      .catch(err => console.log('Oops, something went wrong'))
  },
}

export default apiCalls;