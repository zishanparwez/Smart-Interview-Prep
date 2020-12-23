const express = require('express');
const app = express();
const config = require('./config/database');
const mongoose = require('mongoose');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if(err) {
        console.log('could not connect to db ', err);
    } else {
        console.log('connected to db '+ config.db);
    }
});

app.use(express.static(__dirname + '/client/dist/client'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'client/dist/client/index.html'));
});

app.listen(8080, () => {
    console.log('listening on port 8080');
});