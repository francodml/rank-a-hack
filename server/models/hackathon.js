import mongoose from "mongoose";
const Schema = mongoose.Schema;

const HackathonParticipantSchema = new Schema({
    userId: Schema.Types.ObjectId,
    developmentId: Schema.Types.ObjectId,
    ranking: { type: Number, default: 0 },
});

const HackathonSchema = new Schema({
    name: String,
    description: String,
    location: String,
    participants: [HackathonParticipantSchema],
    startDate: { type: Date, default: Date.now },
});

const Hackathon = mongoose.model('Hackathon', HackathonSchema);

export const HackathonParticipant = mongoose.model('HackathonParticipant', HackathonParticipantSchema);

export default Hackathon;
