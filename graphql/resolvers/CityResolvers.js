import Cities from '../../rest/models/CitiesModel';

export default {
  find: () => Cities.find(),
  search: (_, args) => Cities.find({
    $or: [
      { name: { $regex: `^${args.name}` } },
      { country: { $regex: `${args.name}` } },
    ],
  }).limit(5),
};
