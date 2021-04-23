// import domUpdates from './dom-updates.js'

let apiCalls = {
  getAllTravelers() {
    const fetchAllTravelers = fetch('http://localhost:3001/api/v1/travelers')
      .then(response => response.json())
      .then(data => data.travelers)
    return fetchAllTravelers;
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
    return Promise.all([this.getAllTravelers(), this.getAllTrips(), this.getAllDestinations()])
      .then(data => {
        let allData = [];
        allData.allTravelers = allData.push(data[0]);
        allData.allTrips = allData.push(data[1]);
        allData.allDestinations = allData.push(data[2]);
        return allData;
      })
  },
}

export default apiCalls;