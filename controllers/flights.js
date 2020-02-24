const Flight = require('../models/flights');

module.exports ={
    new: newFlight,
    create,
    index,
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'New Flight'});
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