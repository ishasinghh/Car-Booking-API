const express = require('express');
const CabBook = require('../models/booking');

const router = express.Router();
router.post('/CabBook', async (req, res) => {
  const { source, destination } = req.body;
  const cabBooked = new CabBook({ source, destination });
  const savedCab = await cabBooked.save().catch((err) => {
    // eslint-disable-next-line no-console
    console.log('Error: ', err);
    res.status(500).json({ error: 'Cannot save the information at the moment!' });
  });
  const x = savedCab.id;
  if (savedCab) res.json({ message: 'Your info saved', Details: { id: x, source: req.body.source, destination: req.body.destination } });
});

module.exports = router;



