import mongoose from "mongoose";
import ISuggest from "./suggests.interface";

const SuggestSchema = new mongoose.Schema({
  colorId: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
});

export default mongoose.model<ISuggest & mongoose.Document>(
  "suggest",
  SuggestSchema
);
