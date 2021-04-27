import domUpdates from "./dom-updates";

let apiCalls = {
  getAllTravelers() {
    const fetchAllTravelers = fetch('http://localhost:3001/api/v1/travelers')
      .then(response => {
        if (!response.ok) {
          domUpdates.displayFetchError('We\'re experiencing issues, please check back later');
        }
      return response.json()})
      .then(data => data)
    return fetchAllTravelers;
  },

  getSingleTraveler() {
    const fetchSingleTraveler = fetch('http://localhost:3001/api/v1/travelers/1')
      .then(response => {
        if (!response.ok) {
          domUpdates.displayFetchError('We\'re experiencing issues, please check back later')
        } 
       return response.json()})
      .then(singleTravelerData => singleTravelerData)
    return fetchSingleTraveler;
   },

  getAllTrips() {
    const fetchAllTrips = fetch('http://localhost:3001/api/v1/trips')
      .then(response => {
        if (!response.ok) {
          domUpdates.displayFetchError('We\'re experiencing issues, please check back later')
        }
       return response.json()})
      .then(data => data)
    return fetchAllTrips; 
  },

  getAllDestinations() {
    const fetchAllDestinations = fetch('http://localhost:3001/api/v1/destinations')
      .then(response => {
        if (!response.ok) {
          domUpdates.displayFetchError('We\'re experiencing issues, please check back later')
        }
        return response.json()})
      .then(data => data)
    return fetchAllDestinations
  },

  postNewTrip(trip) {
   return fetch('http://localhost:3001/api/v1/trips', {
      method: 'POST',
      body: JSON.stringify(trip),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        domUpdates.displayFetchError('We\'re experiencing issues, please contact agent to book')
      }
      return response.json()})
    .then(this.getData())
  },

  getData() {
    return Promise.all([this.getAllTravelers(), this.getAllTrips(), this.getAllDestinations(), this.getSingleTraveler()])
      .then(data => data)
      .catch(err => console.log('Oops, something went wrong'))
  },
}

export default apiCalls;