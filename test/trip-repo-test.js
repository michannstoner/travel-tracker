import chai from 'chai';
const expect = chai.expect;
import allTripsData from './test-data/trip-test-data.js';
import destinationData from './test-data/destination-test-data.js'
import TripRepo from '../src/Trip-Repo.js';

describe('TripRepo', () => {
  let trip1;
  let trip2;

    beforeEach(() => {
      trip1 = new TripRepo(allTripsData[0], destinationData);
    });

    it('should be an instance of TripRepo', () => {
      expect(trip1).to.be.an.instanceOf(TripRepo);
    });

    it('should store trip data', () => {
      expect(trip.id).to.equal(1);
      expect(trip.userID).to.equal(44);
      expect(trip.destinationID).to.equal(49);
      expect(trip.travelers).to.equal(1);
      expect(trip.date).to.equal('2019/09/16');
      expect(trip.duration).to.equal(8);
      expect(trip.status).to.equal('approved');
      expect(trip.suggestedActivities).to.equal([]);

    })







})




