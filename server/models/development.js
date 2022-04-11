import mongoose from "mongoose";
const Schema = mongoose.Schema;

const DevelopmentSchema = new Schema({
    name: String,
    description: String,
    developerId: Schema.Types.ObjectId,
    hackathonId: Schema.Types.ObjectId,
    ranking: { type: Number, default: 0 }
});

const Development = mongoose.model('Development', DevelopmentSchema);
export default Development;