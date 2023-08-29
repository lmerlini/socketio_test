const socketIO = require('socket.io');

class SocketServer {
    constructor(server) {
        this.io = socketIO(server);
        this.io.on('connection', (socket) => {
            console.log('Socket connected');
            socket.on('messages', (msg) => {
                socket.broadcast.emit('messages', msg);
            });
        });
    }

    getIo() {
        return this.io;
    }
}

module.exports = SocketServer;