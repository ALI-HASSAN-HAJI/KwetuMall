import express from 'express';

const router = express.Router();

router.get('/fantasy', (req, res) => {
  res.send('This is for football fantacy')
});

router.get('/array', (req, res) => {
  let arr = [55,66,77,88,99,33]
  res.send(arr)
});

router.get('/about', (req, res) => {
  res.send('Im Alii who live in Kenya')
});

export default router;