import express from 'express';

const router = express.Router();

router.get('/arsenal', (req, res) => {
  res.send("Arsenal will win the EPL this season")
});

router.get('/listOfUsers', (req, res) => {
  let listOfUsers = [
  {
    id: 1,
    firstName: 'Hassan',
    lastName: 'Zubeir',
    work: 'developer',
    age: 26,
  },
  {
    id: 2,
    firstName: 'Fatma',
    lastName: 'Sood',
    work: 'developer',
    age: 22,
  },
  {
    id: 3,
    firstName: 'Zakaria',
    lastName: 'Ahmed',
    work: 'Nursing',
    age: 23,
  },
  {
    id: 4,
    firstName: 'Ismail',
    lastName: 'Dakane',
    work: 'Doctor',
    age: 24,
  },
  {
    id: 5,
    firstName: 'Abdikarim',
    lastName: 'Mohamed',
    work: 'Teacher',
    age: 33,
  },
  {
    id: 6,
    firstName: 'Anis',
    lastName: 'Abdullahi',
    work: 'data analyst',
    age: 26,
  },
  {
    id: 7,
    firstName: 'Fardausa',
    lastName: 'Abdi',
    work: 'Nurse',
    age: 24,
  },
 {
   id: 8,
   firstName: 'Nordiin',
   lastName: 'Abdi',
   work: 'Programmer',
   age: 24,

 },
 {
  id: 9,
  firstName: 'Aisha',
  lastName: 'Mohamed',
  work: 'Data analyst',
  age: 26,
 },
 {
  id: 10,
  firstName: 'Abdidin',
  lastName: 'Ali',
  work: 'Developer',
  age: 27,
 }
]
res.send(listOfUsers)
});

router.post('/addition', (req, res) => {
  let a = req.body.a;
  let b = req.body.b;
  let sum = a + b;
  res.send("The display was outstanding yesterday night and the goals were " + sum)
});

router.post('/saka', (req, res) => {
  let name = req.body.name;
  res.send(`Hello Bukayo ${name} thanks for the goal you scored against Everton yesterday night`);
})




export default router;