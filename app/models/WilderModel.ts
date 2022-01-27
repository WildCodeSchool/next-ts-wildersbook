import mongoose from "mongoose";

const WilderSchema = new mongoose.Schema({
  name: String,
  skills: [{ name: String, votes: Number }],
});

const WilderModel =
  mongoose.models.Wilder || mongoose.model("Wilder", WilderSchema);

export default WilderModel;
