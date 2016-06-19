var mongoose = require('mongoose');

//VIRTUAL PROPERTIES
//create a schema
var passengerSchema = new mongoose.Schema ({
  firstName: String,
  lastName: String,
  dob: Date
});

//connect model to schema
var Passenger = mongoose.model('Passenger', passengerSchema);

//make it available to other files
module.exports = Passenger;