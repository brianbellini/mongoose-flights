const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET users listing. */
router.get('/flights', flightsCtrl.index);
router.get('/flights/new', flightsCtrl.new);
router.get('/flights/:id', flightsCtrl.show);
router.post('/flights/', flightsCtrl.create);

router.put('/flights/:id', flightsCtrl.update);

module.exports = router;
