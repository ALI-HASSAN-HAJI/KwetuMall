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
    required: [true, 'Email must be provided'] 
  },
  password: {
    type: String,
    required: [true, 'Password cannot be blank']
  },
  gender: {
    type: String,
    required: [true, 'Gender must be specified']
  }
});

export default model("userModel", userSchema);
