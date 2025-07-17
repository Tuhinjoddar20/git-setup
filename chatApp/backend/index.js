import express from "express";
import http from "http";
import { Server } from 'socket.io';  // <-- Import the Server class from socket.io


const app = express();

const start = http.createServer(app); //  This gives you access to the raw server.

const io = new Server(start); // create an instance of socket.io



const users = {};
io.on('connection', (Socket) => {

    // syntax: socket.on('event-name', callBack);
    // client send to server side.
    Socket.on("new-user-joined", (name) => {
        users[Socket.id] = name;
        //socket.broadcast.emit() in Socket.IO
        //This is used to send a message to all connected clients except the one that sent it.
        // syntax: socket.broadcast.emit('event-name', data);
        Socket.broadcast.emit('user-joined', name);

    })
});

start.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});



