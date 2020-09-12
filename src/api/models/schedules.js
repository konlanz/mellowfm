"use strict"
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schedules = new Schema({
    Title: {
        type: String
    },
    Price: {
        type: String
    },
    Partner: {
        type: String
    },
    Days: {
        type: String
    },
    Timeod:{
        type: String
    }
})