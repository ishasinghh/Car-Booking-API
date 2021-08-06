const express = require('express');
const jwt = require('jsonwebtoken');
const Users = require('../models/user');

const router = express.Router();

// eslint-disable-next-line consistent-return
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const userWithEmail = await Users.findOne({ where: { email } }).catch(
    (err) => {
      // eslint-disable-next-line no-console
      console.log('Error: ', err);
    }
  );
  if (req.body.email === undefined || req.body.password === undefined) {
    return res.status(400).send('No data provided!');
  }
  if (!userWithEmail) {
    return res
      .status(400)
      .json({ message: 'Email or password does not match!' });
  }

  if (userWithEmail.password !== password) {
    return res
      .status(400)
      .json({ message: 'Email or password does not match!' });
  }

  const jwtToken = jwt.sign(
    { id: userWithEmail.id, email: userWithEmail.email },
    process.env.JWT_SECRET
  );

  const userInfo = userWithEmail.email;
  res.json({ message: 'Welcome Back!', token: jwtToken, email: userInfo });
});

module.exports = router;
