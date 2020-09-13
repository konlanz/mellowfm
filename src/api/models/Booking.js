"use strict"
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Booking = new Schema({
   title: {
        type: String
    },
    discreptions: {
        type: String
    },
    publish: {
        type: String
    },

});
module.exports = mongoose.model("Booking", Booking);