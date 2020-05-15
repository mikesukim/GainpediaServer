const { ApolloServer } = require('apollo-server-express');
const express = require('express')
const app = express()
const port = 4000


const resolver = require('./resolver.js')
const schema = require('./schema.js')
const resolvers = resolver.resolver
const typeDefs = schema.typeDefs

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
 });

server.applyMiddleware({ app });
exports.app = app

// COMMENT IN DEPLOYMENT MODE
// app.listen(port, () => 
// console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
// )