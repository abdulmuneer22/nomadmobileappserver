// import bodyParser from 'body-parser';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import '../server/config/db';
// import Airport from './rest/models/AirportModel';

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


// const airportsData = require('./airports');

// // console.log("airports data" , airportsData);
// airportsData.forEach((itm) => {
//   const airport = itm;
//   Airport.create(airport);
// });

