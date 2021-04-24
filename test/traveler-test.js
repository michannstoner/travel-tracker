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
  })






})