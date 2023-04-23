import express from 'express';

const router = express.Router();

// All the other logic will appear here like
// Routes
// req-> request, what you will get from the frontend
// res-> response, the data that you will send to the frontend
// http methods-> get, post, put, delete

router.get('/', (req, res) => {
  res.send('hello world')
});
router.get('/home', (req, res) => {
   res.send('This is the home route.')
});
// you can send string, number, object or an array
router.get('/sendinganObject', (req, res) => {
  let number = {num: 5}
  res.send(number)
});
router.get('/sendinganArray', (req, res) => {
  let number = [1,2,3,4,5,6,7];
  res.send(number)
});
router.get('/users', (req, res) => {
  let users = [
    {
      id: 1,
      firstName: 'Mohamed',
      lastName: 'jamaa',
      age: 23,
    },
    {
      id: 2,
      firstName: 'Nordiin',
      lastName: 'Mohamed',
      age: 22,
    },
    {
      id: 3,
      firstName: 'Siham',
      lastName: 'Hussein',
      age: 20,
    },
  ];
  res.send(users)
});

export default router;