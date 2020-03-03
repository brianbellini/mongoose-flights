const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AIRPORT_NAMES = ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'];


const destinationSchema = new Schema({
    airport: {  type: String,
                enum: AIRPORT_NAMES},
    arrival: Date,
});

const flightsSchema = new Schema({
    airline: {  type: String,
                enum: ['American', 'Southwest', 'United'],
    },
    flightNo: {type: Number,
                min: 10,
                max:9999,
    },
    departs: { type: Date,
            default: function() {
                const theDate = new Date();
                theDate.setFullYear(theDate.getFullYear() + 1);
                return theDate;
            }
    },
    airport: {  type: String,
                enum: AIRPORT_NAMES,

    },

    destinations: [destinationSchema],
} , {
    timestamps: true,
});



module.exports = mongoose.model('Flight', flightsSchema);