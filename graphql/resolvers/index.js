import AirportResolvers from './AirportResolver';


export default {
  Query: {
    searchAirport: AirportResolvers.search,
  },
};
