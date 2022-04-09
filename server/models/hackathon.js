import mongoose, { Schema } from "mongoose";

export const HackathonParticipantSchema = new Schema({
    userId: Schema.Types.ObjectId,
    developmentId: Schema.Types.ObjectId,
    ranking: Number
});

export const HackathonSchema = new Schema({
    name: String,
    description: String,
    location: String,
    participants: [HackathonParticipantSchema],
    startDate: { type: Date, default: Date.now },
});