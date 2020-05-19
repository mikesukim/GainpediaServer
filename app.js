const { ApolloServer } = require('apollo-server-express');
const express = require('express')
const app = express()
const port = 4000
var cors = require("cors");

const resolver = require('./resolver.js')
const schema = require('./schema.js')
const resolvers = resolver.resolver
const typeDefs = schema.typeDefs

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
 });

server.applyMiddleware({ app });
app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static('public'));
exports.app = app

//Run this file in local development environment.
if (process.env.NODE_ENV="development"){
  app.listen(port, () => 
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
  )  
};
