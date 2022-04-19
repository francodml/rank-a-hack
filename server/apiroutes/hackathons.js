import express from "express";
import Hackathon from "../models/hackathon.js";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const hackathons = await Hackathon.find();
        res.send(hackathons);
    }
    catch (err) {
        res.status(500).send(err);
    }
});

router.get('/:id', async (req, res) => {
    console.log(`GET /hackathons/${req.params.id}`);
    try {
        const hackathon = await Hackathon.findOne({ id: req.params.id }).exec();
        hackathon.populate('entries.developerId');
        res.send(hackathon);
    }
    catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.put('/:id', async (req, res) => {
    const hackathon = await Hackathon.findOne({ id: req.params.id }).exec();
    hackathon.overwrite(req.body);
    await hackathon.save();
});

router.get('/:id/entries', async (req, res) => {
    try {
        const hackathon = await Hackathon.findOne({ id: req.params.id }).exec();
        res.send(hackathon.entries);
    }
    catch(err) {
        res.status(500).send(err);
    }
});

router.get('/:id/devs', async (req, res) => {
    try {
        const hackathon = await Hackathon.findOne({ id: req.params.id }).exec();
        
        const devs = await hackathon.getDevelopers();
        console.log(devs);
        res.send(devs);
    }
    catch(err) {
        res.status(500).send(err);
    }
});

router.post('/', async (req, res) => {
    const body = req.body;
    const count = await Hackathon.estimatedDocumentCount();
    const hackathon = new Hackathon(body);
    hackathon.id = count;

    try {
        const s = await hackathon.save();
        if (s === hackathon) {
            res.status(201).send("Created");
        }
    }
    catch(err) {
        res.status(500).send(err);
    }
});

export default router;