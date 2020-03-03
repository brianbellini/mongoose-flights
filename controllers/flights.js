const Flight = require('../models/flights');
const Ticket = require('../models/tickets');

module.exports ={
    new: newFlight,
    create,
    index,
    show,
    update,
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'New Flight', airports: Flight.AIRPORT_NAMES});
}

function create(req, res) {
 const flight = new Flight(req.body);
 flight.save(function(err) {
   if (err) return res.redirect('/flights/new');
   console.log(flight);
   res.redirect('/flights');
 });
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        if (err) return res.redirect('/');
      res.render('flights/index', { title: 'All Flights', flights });
    });
  }

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
      res.render('flights/show', {title: `Flight`, idx: req.params.id, flight, tickets})
    });
  });
}



function update(req, res) {
  Flight.findByIdAndUpdate(
    {_id: req.params.id},
    {destination: [req.body]}), function(err, flight) {
      console.log(flight);
      res.render('flights/show', {title: `Flight`, idx: req.params.id, flight})
    }
}