const MongoClient = require('mongodb').MongoClient;
const credentials = require('./credentials/credentials.js')
const client = new MongoClient(credentials.DBURL, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("users");
  if (err) throw err;
  // perform actions on the collection object
  client.close();
});


const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
  ];


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolver = {
    Query: {
      books: () => books,
    },
  };

  
exports.resolver = resolver;
