const express = require('express');
const path = require('path');

class ExpressApp {
    constructor() {
        this.app = express();
        this.app.use(express.static(path.join(__dirname, '/public')));
        this.app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, '/public/index.html'));
        });
    }

    getApp() {
        return this.app;
    }
}

module.exports = ExpressApp;
