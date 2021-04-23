// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import apiCalls from './api-calls.js';
// const fetchAllTravelers = fetch('http://localhost:3001/api/v1/travelers')
//   .then(response => response.json())
//   .then(data => data);






// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

window.addEventListener('load', fetchAllData);

function fetchAllData() {
  apiCalls.getData();
  // return Promise.all([fetchAllTravelers])
  //   .then(data => {
  //     console.log(data)
  //     return data;
  // })
}
