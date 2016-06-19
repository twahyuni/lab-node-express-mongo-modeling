var mongoose = require('mongoose');

//VIRTUAL PROPERTIES
//create a schema
var terminalSchema = new mongoose.Schema ({
  name: String,
  flights: [{type: mongoose.Schema.Types.ObjectId, ref: 'Flight'}],
  capacity: Number
});

//connect model to schema
var Terminal = mongoose.model('Terminal', terminalSchema);

//make it available to other files
module.exports = Terminal;


/*var mongoose = require('mongoose');

var flightSchema = require('./../models/Flight');

//VIRTUAL PROPERTIES
//create a schema
var terminalSchema = new mongoose.Schema ({
  name: String,
  flights: [flightSchema],
  capacity: Number
});

//connect model to schema
var Terminal = mongoose.model('Terminal', terminalSchema);

//make it available to other files
module.exports = Terminal;*/