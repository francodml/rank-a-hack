import { Schema } from "mongoose";

export const DevelopmentSchema = new Schema({
    name: String,
    description: String,
    developerId: Schema.Types.ObjectId,
    hackathonId: Schema.Types.ObjectId,
    ranking: { type: Number, default: 0 }
});