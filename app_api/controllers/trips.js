const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //register model
const Model = mongoose.model('trips')

// GET: /trips - list all the trips
// Regardless of outcome, respone must inglude html status code
// and json message to the reqesting client
const tripsList = async (req, res) => {
    const q = await Model
        .find({}) //return all recoreds
        .exec();
    
        //uncomment the following line to show results of query
        // on the console
        console.log(q);

    if(!q)
    { // database returned no data
        return res
            .status(404)
            .json(err);
    } else { // return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

// GET: /trips/:tripCode - lists a single trip
// Regardless of outcome, respone must inglude html status code
// and json message to the reqesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode }) //return a single record
        .exec();
    
        //uncomment the following line to show results of query
        // on the console
        console.log(q);

    if(!q)
    { // database returned no data
        return res
            .status(404)
            .json(err);
    } else { // return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

module.exports = { 
    tripsList ,
    tripsFindByCode
};