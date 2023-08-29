const http = require('http');
const ExpressApp = require('./expressApp');
const SocketServer = require('./socketServer');
const database = require('../database/connection');
const Group = require('../database/model/group');

class Main {
    constructor() {
        this.server = http.createServer();
        this.PORT = process.env.PORT || 3000;
    }

    async setupDatabase() {
        try {
            await database.sync();
            const resultadoCreate = await Group.create({
                name: 'fofocas',
                active: true
            });
            console.log(resultadoCreate);
        } catch (error) {
            console.log(error);
        }
    }

    run() {
        this.setupDatabase();

        const expressApp = new ExpressApp();
        const socketServer = new SocketServer(this.server);

        this.server.on('request', expressApp.getApp());
        socketServer.getIo().attach(this.server);

        this.server.listen(this.PORT, () => {
            console.log(`Listening on port ${this.PORT}`);
        });
    }
}


module.exports = Main;
