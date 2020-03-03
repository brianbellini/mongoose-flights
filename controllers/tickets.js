const Flight = require('../models/flights');
const Ticket = require('../models/tickets');

module.exports = {
    new: newTicket,
    create,
}

function newTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({}, function (err, tickets) {
      res.render('tickets/new', {
        title: 'Add Ticket',
        tickets,
        flight
      });
    })
  })
}

function create(req, res) {
  console.log("REQ BODY: ", req.body)
    const ticket = new Ticket(req.body);
    ticket.save(function(err) {
      if (err) return res.redirect('/flights/');
      console.log(ticket);
      res.redirect(`/flights/${req.body.flight}`);
    });
}