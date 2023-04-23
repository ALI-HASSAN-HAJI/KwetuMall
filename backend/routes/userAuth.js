import express from 'express';
import Jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import userModel from '../models/userModel.js';


const router = express.Router();
const saltRound = 10;



// Signup
router.post('/signup', (req, res) => {
  console.log(req.body);
  bcrypt.hash(req.body.password, saltRound, async (err, hash) => {
    if(err) {
      res.send(err);
    }
    try {
      const newUser = new userModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash,
        gender: req.body.gender
      });
      let result = await newUser.save();
      const token = Jwt.sign({userId: result._id}, 'My Secret Key');
      res.send({
        data: result,
        token: token,
        message: 'Created account Successfully!'
      });
    } catch (error) {
      res.send(error.message)
    }
  })
});


// Signin
router.post('/signin', async (req, res) => {

  if(req.body.username && req.body.password) {
    const user = await userModel.findOne({username: req.body.username });
    // console.log(user);
    bcrypt.compare(req.body.password, user.password, (err, response) => {
      if(response === true) {
        const token = Jwt.sign({userId: user._id}, 'My_Secret_Key');
        res.send({
          token: token,
          message: "User authenticated"
        });
      } else {
        res.send({error: 'Invalid Password or username'})
      }
    })
  } else { 
    res.send({error: 'You must provide email and password'});
  }
});


//Get all the Users
router.get('/', async (req, res) => {
  // let user = await userModel.find();
  res.send('user')
});


export default router;