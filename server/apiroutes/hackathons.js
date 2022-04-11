import express from "express";
import Hackathon from "../models/hackathon.js";

const router = express.Router();

router.get('/', (req, res) => {
    Hackathon.find()
        .then(hackathons => {
            res.send(hackathons);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

router.get('/:id', (req, res) => {
    res.send(`Specific hackathon @${req.params.id}`);
}); 

router.get('/:id/users', (req, res) => {
    res.send(`Specific hackathon participants @${req.params.id}`);
});

router.post('/', (req, res) => {
    console.log(req);
    res.status(501).send("Not implemented");
    /*body = req.body;
    const hackathon = new Hackathon(body);
    hackathon.save()
        .then(() => {
            res.status(201).end();
        })
        .catch((err) => {
            res.status(500).send(err);
        });*/
});

export default router;