const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

// define rout for our trips endpoint
router
    .route("/trips")
    .get(tripsController.tripsList);

// GET method routs tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;