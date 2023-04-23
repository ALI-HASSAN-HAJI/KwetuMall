import {model, Schema} from 'mongoose';

const playerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  goals: {
    type: Number,
    required: true
  },
  assist: {
    type: Number,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  images: [String]

});

export default model("playerModel", playerSchema);