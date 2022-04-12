import express from 'express';
import User from '../models/user.js';

const router = express.Router();

router.get('/', (req, res) => {
    User.find()
        .then(users => res.send(users))
        .catch(err => res.status(500).send(err));
});

router.get('/:id', (req, res) => {
    User.find({userId: req.params.id})
        .then(user => res.send(user))
        .catch(err => res.status(500).send(err));
});

router.post('/', async (req, res) => {
    var users = req.body;
    const count = await User.estimatedDocumentCount();
    const ids = [];
    for (let i = 0; i < users.length; i++) {
        users[i].userId = count + i;
        ids.push(users[i].userId);
    }
    User.insertMany(users)
        .then(() => {
            res.status(201);
            res.json(ids);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });

});

export default router;