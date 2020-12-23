const express = require('express');
const app = express();
const router = express.Router();
const config = require('./config/database');
const mongoose = require('mongoose');
const path = require('path');
const authentication = require('./routes/authentication')(router);
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, { useNewUrlParser: true }, (err) => {
    if(err) {
        console.log('could not connect to db ', err);
    } else {
        console.log('connected to db: '+ config.db);
    }
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/dist/client'));
app.use('/authentication', authentication);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'client/dist/client/index.html'));
});

app.listen(8080, () => {
    console.log('listening on port 8080');
});