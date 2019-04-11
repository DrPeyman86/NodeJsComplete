const http = require('http');

// function rqListener(req, res) {

// }

// http.createServer(rqListener);

//this next-gen syntax of javascript is same as above. It calls a function with (req,res) arguments every time there is a request of the http. 
//so every time a request is made to your backed, the callback function within createServer() will run. 
//http.createServer returns a SERVER. so you can set it to constant because you only need to create the server once. 
const server = http.createServer((req,res)=>{
    console.log(req);
    process.exit();//process.exist() exits the nodejs event loop and shuts down the app. typically you wouldn't call this method since you want your server running. 
})

server.listen(3000);