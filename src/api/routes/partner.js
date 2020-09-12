"use strict"
const express = require("express");
const router = express.Router();
var Buses = require('../models/buses');
var Schedules = require('../models/schedules');
var rooot = require('../models/routes');
var City = require('../models/city');

router.post('/add_bus', (req, res)=>{
    var busdata = req.body;
    console.log(busdata);
    var bus = new Buses(busdata).save()
    .then(bus=>{
        res.status(200).json({'Bus': 'Bus Added'});
    })
    .catch(err=>{
        res.status(400).send("Unable of to add to Bus");
    });
   
});
router.get('/schedules', (req, res)=>{
    Routes.find({}, (dat)=>{
        if(err) throw err;
        res.json(dat);
    })
})
router.post('/add_schedules', (req, res)=>{
    var schedule = req.body;
    console.log(schedule);
    new Schedules(schedule)
    .save()
    .then(()=>{
        res.status(200).json({'Schedules': 'Schedules Added'})
    })
    .catch(()=>{
        res.status(400).send("Unable to add Schedule");
    });
});
//ading a route
router.post('/route', (req, res)=>{
    var data = req.body;
    var title = data.Departure +'-'+data.Destination;
    
    var obj = {
        Departure: data.Departure,
        Destination: data.Destination,
        Price: data.Price,
        Title: title
    }
    let booking = new rooot(obj);
    booking.save()
        .then(()=>{
            res.status(200).json({'add': 'route added successfully'});
        })
        .catch(err=>{
            res.status(400).send("Unable to add route")
        })
});
router.post('/addcity', (req, res)=>{
    console.log(req.body);
    let city = new City(req.body);
    city.save()
    .then(city=>{
        res.status(200).json({'city': 'City has been found'});
    })
    .catch(err=>{
        res.status(400).send("Unable of to add to City");
    })
});


module.exports = router;