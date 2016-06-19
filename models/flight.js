var mongoose = require('mongoose');

//VIRTUAL PROPERTIES
//create a schema
var flightSchema = new mongoose.Schema ({
  from: String,
  to: String,
  airline: String,
  passengers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Passenger'}]
});

//connect model to schema
var Flight = mongoose.model('Flight', flightSchema);

//make it available to other files
module.exports = Flight;


/*var mongoose = require('mongoose');

var passengerSchema = require('./../models/Passenger');

//VIRTUAL PROPERTIES
//create a schema
var flightSchema = new mongoose.Schema ({
  from: String,
  to: String,
  airline: String,
  passengers: [passengerSchema]
});

//connect model to schema
var Flight = mongoose.model('Flight', flightSchema);

//make it available to other files
module.exports = Flight;*/