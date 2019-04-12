const http = require('http');
const routes = require('./routes')


// function rqListener(req, res) {

// }

// http.createServer(rqListener);

//this next-gen syntax of javascript is same as above. It calls a function with (req,res) arguments every time there is a request of the http. 
//so every time a request is made to your backed, the callback function within createServer() will run. 
//http.createServer returns a SERVER. so you can set it to constant because you only need to create the server once. 
// const server = http.createServer((req,res)=>{
// //moved all things from here to routes.js. replace it with the syntax below.   
// })

//this next-gen syntax of javascript is same as above. It calls a function with (req,res) arguments every time there is a request of the http. 
//so every time a request is made to your backed, the callback function within createServer() will run. 
//http.createServer returns a SERVER. so you can set it to constant because you only need to create the server once. 
const server = http.createServer(routes.requestHandler);//this basically says to use the routes function for all incoming requests rather than having it all in one file. 

server.listen(3200);