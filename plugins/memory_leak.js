//Concider reading : Memo_leak.md
//Running on 64bit. 
//NodeJS version is 0.10.29.
//Socket IO version is 1.0.6. 
//The code we're using is:

var http = require('http'),
    io = require('socket.io');

var app = http.createServer();
var server = io(app);
app.listen(80);
var connections = 0;

server.on('connection', function(socket) {
    connections++;

    socket.on('disconnect', function() {
        connections--;
    });
});

setInterval(function() {
    var mem = process.memoryUsage();
    console.log(mem.rss + ' ' + mem.heapTotal + ' ' + mem.heapUsed + ' ' + connections);
}, 10000);
