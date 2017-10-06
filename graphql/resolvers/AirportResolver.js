import Airport from '../../rest/models/AirportModel';

export default {
  find: () => Airport.find(),
  search: (_, args) => Airport.find({
    $or: [
      { name: { $regex: `^${args.name}` } },
      { iata: { $regex: `${args.name}` } },
    ],
  }).limit(5),
};
