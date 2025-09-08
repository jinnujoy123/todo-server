// import json server
const JSONServer = require('json-server')

// create serer for running json file
const todo_server=JSONServer.create()

// import db.json
const router = JSONServer.router("db.json")


// adding middlewares
const middleware=JSONServer.defaults()

// define port to run the app
const PORT=3000

// use middleware json server
todo_server.use(middleware)

// define routes for client requests
todo_server.use(router)

// run the server for client request
todo_server.listen(PORT,()=>{
    console.log(`todo_server started at port ${PORT} and waiting for client request!!!`);
    
})