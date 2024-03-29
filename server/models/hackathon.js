import mongoose from "mongoose";
const Schema = mongoose.Schema;
import {DevelopmentSchema} from './development.js';

const HackathonSchema = new Schema({
    name: String,
    description: String,
    location: String,
    id: {type: Number, default: 0, unique: true, dropups: true},
    entries: [DevelopmentSchema],
    startDate: { type: Date, default: Date.now },
});

HackathonSchema.virtual('developers').get( function() {
    let devs = [];
    this.entries.forEach(entry => {
        devs.push(entry.developerId);
    });

    return devs;
});

const Hackathon = mongoose.model('Hackathon', HackathonSchema);

export default Hackathon;
