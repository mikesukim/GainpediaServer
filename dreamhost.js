//This file is for connecting App to Dreamhost Server.
//Change current filename to app.js and
//Locate this file one above of current directory


const app = require('./GainpediaServer/app.js')
const server = app.server

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});