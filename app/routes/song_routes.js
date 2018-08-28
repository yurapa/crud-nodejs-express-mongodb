module.exports = (app, db, ObjectID) => {
    app.route('/songs')
        .get((req, res) => {
            /* View all songs */
            db.collection('songs').find().toArray((err, result) => {
                if (err) throw err;
                res.send(result);
            });
        });

    app.route('/song')
        .post((req, res) => {
            /* Add one song by ID */
            try {
                db.collection('songs').insertOne({
                    decade: req.body.decade,
                    artist: req.body.artist,
                    song: req.body.song,
                    weeksAtOne: req.body.weeksAtOne
                });
                res.send('Success. A new song was added.');
            } catch (e) {
                print(e);
            };
        });

    app.route('/song/:id')
        .delete((req, res) => {
            /* Delete one song by ID */
            db.collection('songs').findOneAndDelete({ _id: new ObjectID(req.params.id) }, (err, item) => {
                if (err) {
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    res.send(`Song with id: ${req.params.id} was deleted!`);
                }
            });
        })
        .get((req, res) => {
            /* Get one song by ID */
            db.collection('songs').findOne({ _id: new ObjectID(req.params.id) }, (err, item) => {
                if (err) throw err;
                res.send(item);
            });
        })
        .put((req, res) => {
            /* Update one song by ID */
            db.collection('songs').findOneAndUpdate(
                { _id: new ObjectID(req.params.id) },
                {
                    $set: {
                        decade: req.body.decade,
                        artist: req.body.artist,
                        song: req.body.song,
                        weeksAtOne: req.body.weeksAtOne
                    }
                }, (err, result) => {
                    if (err) return res.send(err)
                    res.send(result);
                }
            );
        });
};