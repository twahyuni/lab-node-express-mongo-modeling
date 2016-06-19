var mongoose = require('mongoose');

var Terminal = mongoose.model("Terminal");

//VIRTUAL PROPERTIES
//create a schema
var airportSchema = new mongoose.Schema ({
  name: String,
  country: String,
  terminals: [Terminal.schema],
  opened: Date
});

//connect model to schema
var Airport = mongoose.model('Airport', airportSchema);

//make it available to other files
module.exports = Airport;

/*var mongoose = require('mongoose');

var terminalSchema = require('./../models/Terminal');

//VIRTUAL PROPERTIES
//create a schema
var airportSchema = new mongoose.Schema ({
  name: String,
  country: String,
  terminals: [terminalSchema],
  opened: Date
});

//connect model to schema
var Airport = mongoose.model('Airport', airportSchema);

//make it available to other files
module.exports = Airport;*/