const fs = require('fs');

const requestHandler = ((req,res)=> {
    //console.log(req.url, req.method, req.headers);
    //process.exit();//process.exist() exits the nodejs event loop and shuts down the app. typically you wouldn't call this method since you want your server running. 
    const url = req.url;
    const method = req.method;
    //triple equal sign means that URL is both a string and has that value. 
    if(url === '/') {
        res.write('<html>');
        res.write('<header><title>My first page</title></header>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end();//the end of the response. can't send any "res" after this point otherwise it would break. 
    }
    if(url === '/message' && method === 'POST') {
        
        const body = []; 
        //on allows you to listen to certain events. 'data' listeninig to allows node js to listen to every time certain data is ready to be read. Buffer thing. 
        req.on('data', chunk=>{
            console.log(chunk);
            body.push(chunk);
        })
        //fired once the incoming request is done parsing. 
        //returh this so that when on end does get exectued and setHeaders() and sends responds, it doesn't go on to the code below where it tries to setHeader and send() again, that would crash.
        return req.on('end', () => {
            //body comes in from the 'data' listener. 
            const parsedBody = Buffer.concat(body).toString();//create the buffer object. add all the "chunks" from above to this Buffer as they are received. then convert toString();
            console.log(parsedBody);//this will create a key/value paired of the inputs from the form. so up top you had name input message. so the value would be what was typed. 
            const message = parsedBody.split('=')[1];
    
            //fs.writeFileSync('message.txt', message);//synchronous -- this will block code execution until the file is written and done. if you have a large file it will block all code execution and you don't want that.
            //use fs.writeFile -- if you think the file will be too big. And register a callback for it. 
            fs.writeFile('message.txt', message, (err)=> {
                if(err) {
                    res.statusCode = 500;
                    
                } else {
                    res.statusCode = 302;                   
                    //return res.end()//return the res.end so it doesn't continue with the code. 
                }
                res.setHeader('Location', '/')
                return res.end()//return the res.end so it doesn't continue with the code. 
            })
            
        })
    
       
        
        
    }
    res.setHeader('Content-Type', 'text/html');//set the content of the response type to html. 
    res.write('<html>');
    res.write('<header><title>My first page</title></header>')
    res.write('</html>')
    res.end()
});



module.exports = {
    requestHandler: requestHandler,
    someText: 'sometext'
}

//or
//module.exports.someText = 'some hard coded test'
//module.exports.requestHandler = requestHandler

//or
//exports.someText = 'some hard coded test'
//exports.requestHandler = requestHandler