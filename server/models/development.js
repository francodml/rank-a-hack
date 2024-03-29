import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const DevelopmentSchema = new Schema({
    name: String,
    description: String,
    developerId: { type: Schema.Types.ObjectId, ref: 'User' },
    ranking: { type: Number, default: 0 }
});

const Development = mongoose.model('Development', DevelopmentSchema);
export default Development;