const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

const socketio = require('socket.io');
const io = socketio(server);

io.on('connection', socket => {
    socket.on('connect', () => {
        console.log('user connect');
    })
});

server.listen(3000, () => console.log("Servidor inicializado"));

