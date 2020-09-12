"use strict"
const express = require("express");
const router = express.Router();
let Booking = require("../models/Booking");
let City = require("../models/city");
let Roout = require("../models/routes");
let Schedule = require('../models/schedules');


router.get('/', (req, res)=>{
    Roout.find({}, (err, bookind_data)=>{
        if(err){
            console.log("err");

        }else{
            res.json(bookind_data);
        }
    })
});

router.get('/city', (req, res)=>{
    City.find({}, (err, cityData)=>{
        if(err) throw err;
        res.json(cityData);
    })
})

router.get('/booked', (req, res)=>{
    Booking.find({}, (err, bookind_data)=>{
        if(err){
            console.log("err");

        }else{
            res.json(bookind_data);
        }
    })
});
router.get('/schedules', (req, res)=>{
    var dat = req.body;
    Schedule.find(dat, (err, data)=>{
        if(err){
            throw err;
        } else{
            res.json(data);
        }

    });
})

router.post('/findBus',(req, res)=>{
    let obj = req.body
    console.log("obj");
    Roout.find(obj, (err, objectt)=>{
        if(err) {
            console.log(err);
        }
        if(objectt){
            console.log(objectt);
            res.json(objectt);
        }
    });
})


//the booking 
router.post('/booked', (req, res)=>{
    
    let booking = new Booking(req.body);
    booking.save()
    .then(booking=>{
        res.status(200).json({'booking': 'booking route added successfully'})
    })
    .catch(err=>{
        res.status(400).send('Booking was unseccesful');
    });
});

module.exports= router;