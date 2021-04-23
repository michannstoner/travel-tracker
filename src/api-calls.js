// import domUpdates from './dom-updates.js'

let apiCalls = {
  getAllTravelers() {
    const fetchAllTravelers = fetch('http://localhost:3001/api/v1/travelers')
      .then(response => response.json())
      .then(data => data.travelers)
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
      .then(data => data.trips)
    return fetchAllTrips; 
  },

  getAllDestinations() {
    const fetchAllDestinations = fetch('http://localhost:3001/api/v1/destinations')
      .then(response => response.json())
      .then(data => data.destinations)
    return fetchAllDestinations
  },

  getData() {
    return Promise.all([this.getAllTravelers(), this.getAllTrips(), this.getAllDestinations(), this.getSingleTraveler()])
      .then(data => {
        let allData = {};
        allData.allTravelers = data[0];
        allData.allTrips = data[1];
        allData.allDestinations = data[2];
        allData.singleTraveler = data[3];
        console.log(allData)
        return allData;
      })
      .catch(err => console.log('Oops, something went wrong'))
  },
}

export default apiCalls;