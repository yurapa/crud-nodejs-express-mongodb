const songRoutes = require('./song_routes');

module.exports = (app, db, ObjectID) => {

    app.get('/', (req, res) => {
        res.send('Welcome! This is API root page.');
    });

    songRoutes(app, db, ObjectID);
};