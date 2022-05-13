const http = require('http');
const routes = require('./routes')
const sequelize = require('./Database/database')
const Product = require('./Models/products')
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

//sync method has a look at all models you define.
//in all your model files, where you use sequelize.define which comes from the same file ../database/database.js file, so it's all under one object..that's how sequelize will know
//all those models belong under one object and will sync every one of them by the .sync() method. 
sequelize.sync()
.then((results)=>{
    //console.log(results)
    Product.create({
        
    })
    server.listen(3200);
}).catch((e)=>{
    console.log(e)
});

