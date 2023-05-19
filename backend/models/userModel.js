import {model, Schema} from 'mongoose';

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Username cannot be blank']
  },
  lastName: {
    type: String,
    required: [true, 'Lastname cannot be blank']
  },
  email: {
    type: String,
    required: [true, 'Email must be provided'],
    unique: true
  },
  gender: {
    type: String,
    required: [true, 'Gender must be specified']
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});

export default model("userModel", userSchema); 