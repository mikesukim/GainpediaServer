//Mock data
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

  const posts = [
    {
      id : 1000,
      title: 'post title 1',
      subtitle: 'post subtitle 1',
      titleImgUrl: 'http://localhost:4000/static/images/sample2.jpg',
      author: 'Michael Kim',
      authorImgUrl: 'http://localhost:4000/static/images/sample3.jpg',
    },
  ]


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolver = {
    Query: {
      books: () => books,
      posts: () => posts,
    },
  };

  
exports.resolver = resolver;
