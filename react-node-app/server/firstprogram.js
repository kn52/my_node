const http = require('http');
const events = require('events');

var emitter = new events.EventEmitter();

const port = 8080 || process.env.PORT;

const server = http.createServer((req,res) => {
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello World");
})

// var connectHandler = function connected() {
//     console.log('connection succesful.');
//     emitter.emit('data_received');
//  }
//  emitter.on('connection', connectHandler);
//  emitter.on('data_received', function() {
//     console.log('data received succesfully.');
//  });
// emitter.emit('connection');

 
emitter.on('connection', () => {
    console.log('connection succesful.');
    emitter.emit('data_received');
});
  
emitter.on('data_received', () => {
    console.log('data received succesfully.');
});
 
emitter.emit('connection');

server.listen(port,()=>{
    console.log(`Working ` + port);
})