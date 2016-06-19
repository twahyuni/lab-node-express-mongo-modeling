//setup
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect
var app = express();

app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect('mongodb://localhost/airport');

//models
var Passenger = require('./models/Passenger');
var Terminal = require('./models/Terminal');
var Flight = require('./models/Flight');
var Airport = require('./models/Airport');


//create data
var flight1 = new Flight ({
  from: 'CDG France',
  to: 'JFK New-York, USA',
  airline: 'American Airlines'
});

var flight2 = new Flight ({
  from: 'Heathrow UK',
  to: 'JFK New-York, USA',
  airline: 'British Airways'
});

flight1.save();
flight2.save();

var airport1 = new Airport ({
  name: 'JFK',
  country: 'USA',
  opened: '1990-06-07'
});

airport1.terminals.push({
  name: 'Terminal 1',
  flights: [flight1, flight2],
  capacity: 234324
});

airport1.save();

console.log("Flight 1:", flight1);
console.log("Flight 2:", flight2);
console.log("Airport 1:", airport1);
console.log("terminal 1:", airport1.terminals);
