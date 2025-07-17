
import http from "http";
import express from "express";
// socket.io use Server  is "S is upper case"
import { Server } from 'socket.io';  // <-- Import the Server class from socket.io


const app = express();

// *** To integrate WebSocket / Socket.io
// *** Libraries like socket.io need a raw HTTP server to hook into for WebSocket connections.

const start = http.createServer(app); //  This gives you access to the raw server.

const io = new Server(start); // create an instance of socket.io


app.use(express.static("public"));

// 👉 Define a GET route for "/"
app.get("/", (req, res) => {
    res.send('<h1>Hello world</h1>');

});

//  Listen for new WebSocket connections from clients
io.on('connection', (socket) => {
    console.log('a user connected', socket.id); // 📡 Log when a new client connects
    // You can add more socket listeners here (e.g., chat, disconnect, etc.)
    //  the eventName in socket.on('eventName', ...) on the server must exactly match the name used in the client’s socket.emit('eventName', ...).
    socket.on('chatMessage', (data) => {
        // console.log('Received message from client:', data);

        // 📨 Send it back to all clients (including the sender)
        // The 'chatMessage' is just the event name — you can use any custom name
        // The event name used in io.emit()(backend)
        // Must match the event name used in socket.on()(frontend)
        io.emit('newMessage', data);
    })
});

start.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

