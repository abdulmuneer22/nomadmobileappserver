import AirportResolvers from './AirportResolver';
import CityResolvers from './CityResolvers';

export default {
  Query: {
    searchAirport: AirportResolvers.search,
    searchCities: CityResolvers.search,
  },
};
