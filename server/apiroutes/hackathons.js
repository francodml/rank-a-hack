import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('All hackathons');
});

router.get('/getOne', (req, res) => {
    res.send('Specific hackathon');
});

router.post('/', (req, res) => {
    res.send('Create hackathon');
});

export default router;