var db = require("../models");

//var appointment= require("../models/appointment_model.js");
// var appointmentinfo = {
//     Name: req.body.Name,
//     Email: req.body.Email,
//     Phone: req.body.Phone,
//     Notes: req.body.Notes,
//     Phone1: req.body.Phone1,
//     Email1: req.body.Email1,
//     Day: req.body.Day 
// };
module.exports = function(app) {
    app.post("/main", function(req,res){
        db.appointment.create (req.body).then(function(dbappointment){
            res.end(dbappointment);
        });
    });
};