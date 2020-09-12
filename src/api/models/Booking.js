"use strict"
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Booking = new Schema({
    Departure: {
        type: String
    },
    Destination: {
        type: String
    },
    Partner: {
        type: String
    },
    Price: {
        type: Number
    },
    DateOD: {
        type: String
    },
    Fullname: {
        type: String
    },
    Phone: {
        type: Number
    },
    Payment: {
        type: String
    },
    SeatNo: {
        type: String
    }

});
module.exports = mongoose.model("Booking", Booking);