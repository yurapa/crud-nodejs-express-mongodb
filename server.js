const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const CONFIG = require('./config/db');
let ObjectID = require('mongodb').ObjectID;

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


mongodb.MongoClient.connect(CONFIG.generateUrl(), { useNewUrlParser: true }, (err, client) => {

    if (err) throw err;

    let db = client.db(CONFIG.dbName);

    require('./app/routes')(app, db, ObjectID);

    app.listen(8000, () => {
        console.log('Api server works well for now. Port: ' + 8000);
    });

    // if (client) {
    //     client.close();
    // }
});