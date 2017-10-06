// import bodyParser from 'body-parser';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import '../server/config/db';
// import Cities from './rest/models/CitiesModel';

const graphqlHTTP = require('express-graphql');

const express = require('express');

const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('Running application on localhost:4000');
});


// const citydata = require('./cities');

// // console.log("airports data" , airportsData);
// citydata.forEach((itm) => {
//   const city = itm;
//   Cities.create(city);
// });

