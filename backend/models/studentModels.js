import {model, Schema} from 'mongoose';

const studentSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  admissionNumber: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  height: {
    type: String,
    required: true
  },
  yearOfBirth: {
    type: Number,
    required: true
  }
});

export default model("studentModel", studentSchema);