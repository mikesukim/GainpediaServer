const { ApolloServer,gpl } = require('apollo-server');

const resolver = require('./resolver.js')
const schema = require('./schema.js')
const resolvers = resolver.resolver
const typeDefs = schema.typeDefs

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
 });
exports.server = server

// COMMENT IN DEPLOYMENT MODE
// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});