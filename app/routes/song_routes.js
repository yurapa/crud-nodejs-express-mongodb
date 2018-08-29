module.exports = (app, db, ObjectID) => {

    app.route('/songs')
        .get((req, res) => {
            /* View all songs */
            db.collection('songs').find().toArray((err, result) => {
                if (err) {
                    console.log(err);
                    return res.sendStatus(500);
                }
                res.send(result);
            });2
        });

    app.route('/song')
        .post((req, res) => {
            /* Add one song */
            db.collection('songs').insertOne({
                decade: req.body.decade,
                artist: req.body.artist,
                song: req.body.song,
                weeksAtOne: req.body.weeksAtOne
            }, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.sendStatus(500);
                }
                res.sendStatus(200);
            });
        });

    app.route('/song/:id')
        .get((req, res) => {
            /* Get one song by ID */
            db.collection('songs').findOne({ _id: ObjectID(req.params.id) }, (err, item) => {
                if (err) {
                    console.log(err);
                    return res.sendStatus(500);
                }
                res.send(item);
            });
        })
        .put((req, res) => {
            /* Update one song by ID */
            db.collection('songs').updateOne(
                {_id: ObjectID(req.params.id)},
                {
                    $set: {
                        decade: req.body.decade,
                        artist: req.body.artist,
                        song: req.body.song,
                        weeksAtOne: req.body.weeksAtOne
                    }
                }, (err, result) => {
                    if (err) {
                        console.log(err);
                        return res.sendStatus(500);
                    }
                    res.sendStatus(200);
                }
            );
        })
        .delete((req, res) => {
            /* Delete one song by ID */
            db.collection('songs').deleteOne({_id: ObjectID(req.params.id)}, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.sendStatus(500);
                }
                res.sendStatus(200);
            });
        })
};