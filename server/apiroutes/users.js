import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('All users?');
});

router.get('/:id', (req, res) => {
    res.send(`Specific user @${req.params.id}`);
});

router.post('/', (req, res) => {
    res.send('Create user');
});

