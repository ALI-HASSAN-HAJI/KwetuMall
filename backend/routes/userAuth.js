import express from 'express';
import Jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import userModel from '../models/userModel.js';
import checkAuth from './checkAuth.js';


const router = express.Router();
const saltRound = 10;  



//Get all the Users
  router.get('/users', checkAuth, async (req, res) => {
  let users = await userModel.find();
  res.send(users);
});

// Signin
router.post('/signin', async (req, res) => {
  console.log(req.body)

  try {
    if(req.body.email && req.body.password) {
      const user = await userModel.findOne({email: req.body.email }); 
      if(!user) {
        res.send({error: "invalid password or email"});
      } else{
        bcrypt.compare(req.body.password, user.password, (err, response) => {
          if(response === true) {
            const token = Jwt.sign({userId: user._id}, 'MY_SECRET_KEY'); 
            res.send({
              token: token,
              message: "User authenticated"
            });
          } else {
            res.send({error: 'Invalid password or email'})
          }
        })
      }
    } else { 
      res.send({error: 'You must provide email and password'});
    }
  } catch (error) {
    res.send(error.message)
  }

});


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

// Delete a user:
router.post('/delete/:id', async (req, res) => {
  let id = req.params.id;
  await userModel.deleteOne({_id: id});
  res.send("One of the Users has been deleted successfully");
});


export default router;