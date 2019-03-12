
// Llamar un modulo de node 
// const nombreVariable = require('nombreModulo');

const http = require('http'); // Modulo http
const fs = require('fs'); // Modulo fs

// fs.readFile('index.html', 'utf8', function(err, data){
//     // Control de errores
//     if(err){
//         return console.log(err);
//     }

//     var server = http.createServer(function(req, res){
//         console.log(req);
//         res.writeHead(200);
//         res.end(data);
//     }).listen(8080);
// });

http.createServer(function(req, res){
    fs.readFile('index.html', 'utf8', function(err, data){
        if(err){
            return console.log(err);
        }
        
        res.writeHead(200);
        res.end(data);
    });
}).listen(8080);
