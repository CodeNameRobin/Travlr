const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

// define rout for our trips endpoint
router
    .route("/trips")
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

// GET method routs tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;