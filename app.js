const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;
 
const resolver = require('./resolver.js')
const resolvers = resolver.resolver


const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: ({ request }) => {
    console.log(request.headers)
  }
 });
exports.server = server

// COMMENT IN DEPLOYMENT MODE
// // The `listen` method launches a web server.
// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });