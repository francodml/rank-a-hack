import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, unique:true, dropups:true},
    firstName: String,
    lastName: String,
    location: String,
    hackathons: [Schema.Types.ObjectId],
});

const User = mongoose.model('User', UserSchema);
export default User;