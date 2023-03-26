import mongoose from 'mongoose';
import ISuggest from './suggests.interface';

const SuggestSchema = new mongoose.Schema({
  ColorId: {
    type: String,
    require: true,
  },
  Color: {
    type: String,
    require: true,
  },
  ColorName: {
    type: String,
    require: true,
  },
  BorderColor: {
    type: String,
    require: true,
  },
  Content: {
    type: String,
    require: false,
  },
});

export default mongoose.model<ISuggest & mongoose.Document>('suggests', SuggestSchema);
