//This file is for connecting App to Dreamhost Server.
//Change current filename to app.js and
//Locate this file one above of current directory


const server = require('./GainpediaServer/app.js')
const app = server.app

// The `listen` method launches a web server.
app.listen(port, () => 
console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
)