// import domUpdates from './dom-updates.js'

let apiCalls = {
  getAllTravelers() {
    const fetchAllTravelers = fetch('http://localhost:3001/api/v1/travelers')
      .then(response => response.json())
      .then(data => data)
    return fetchAllTravelers;
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
    return Promise.all([this.getAllTravelers(), this.getAllTrips(), this.getAllDestinations()])
      .then(data => {
        console.log(data)
        return data;
      })
  },
}

export default apiCalls;