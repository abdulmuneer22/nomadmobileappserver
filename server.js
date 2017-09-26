// import bodyParser from 'body-parser';
import schema from './schema';

const graphqlHTTP = require('express-graphql');

const express = require('express');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000);
