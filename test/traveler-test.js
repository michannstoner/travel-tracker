import chai from 'chai';
const expect = chai.expect;
import allTripsData from './test-data/trip-test-data.js';
import destinationData from './test-data/destination-test-data.js';
import allTravelersData from './test-data/traveler-test-data.js';
import Traveler from '../src/Traveler.js'


describe('Traveler', () => {
  let traveler;

  beforeEach(() => {
    traveler = new Traveler(allTravelersData[0], allTripsData, destinationData);
  });

  it('should be an instance of Traveler', () => {
    expect(traveler).to.be.an.instanceOf(Traveler);
  });

  it('should store traveler information', () => {
    expect(traveler.id).to.equal(1);
    expect(traveler.name).to.equal('Ham Leadbeater');
    expect(traveler.travelerType).to.equal('relaxer');
  });

  it('should store a travelers trips', () => {
    expect(traveler.tripData).to.deep.equal([
      {
        id: 3,
        userID: 1,
        destinationID: 3,
        travelers: 4,
        date: '2021/05/22',
        duration: 17,
        status: 'pending',
        suggestedActivities: [],
        destination: {
          id: 3,
          destination: 'Sydney, Austrailia',
          estimatedLodgingCostPerDay: 130,
          estimatedFlightCostPerPerson: 950,
          image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          alt: 'opera house and city buildings on the water with boats'
        }
      },
      {
        id: 4,
        userID: 1,
        destinationID: 4,
        travelers: 2,
        date: '2021/02/25',
        duration: 10,
        status: 'approved',
        suggestedActivities: [],
        destination: {
          id: 4,
          destination: 'Cartagena, Colombia',
          estimatedLodgingCostPerDay: 65,
          estimatedFlightCostPerPerson: 350,
          image: 'https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          alt: 'boats at a dock during the day time'
        }
      }
    ]);
  });

  it('should calculate a travelers amount spent for the year', () => {
    const travelerCost = traveler.calculateSpentThisYear()
    expect(travelerCost).to.equal(16104);
  });
});