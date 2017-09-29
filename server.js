// import bodyParser from 'body-parser';
import typeDefs from './schema';
import resolvers from './resolvers'
import './config/db'
const graphqlHTTP = require('express-graphql');
import {makeExecutableSchema} from 'graphql-tools'
const express = require('express');
const app = express();

var schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

app.use('/graphql', graphqlHTTP({ 
  schema,
  graphiql: true,
}));

app.listen( 4000,() => {
  console.log('Running application on localhost:4000')
});
