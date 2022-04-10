import { Schema } from "mongoose";

export const UserSchema = new Schema({
    username: String,
    firstName: String,
    lastName: String,
    location: String,
    hackathons: [Schema.Types.ObjectId],
});