var http = require('http'); // check if works
// import { createServer } from 'http'; // alternate version

http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type': 'application/json'});
    let numero = {
        valor: Math.round(Math.random()*10)
    }
    res.end(JSON.stringify(numero))
}).listen(8080)

