const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
})

module.exports = mongoose.model('Flight', flightsSchema);