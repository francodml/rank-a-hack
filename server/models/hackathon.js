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

HackathonSchema.methods.getDevelopers = async function(callback) {
    const devIds = [];
    var entries = [...this.entries];
    entries.sort((a, b) => a.ranking - b.ranking);
    entries.forEach(entry => {
        devIds.push(entry.developerId);
    });
    const devs = await mongoose.model('User').find({userId: {$in: devIds}});
    return devs;
}

const Hackathon = mongoose.model('Hackathon', HackathonSchema);

export default Hackathon;
