import express from 'express';
const router = express.Router();

let messages = [];

router.post('/messages', (req, res) => {
  messages.push(req.body.text);
  res.send(messages);
})

export default router;
