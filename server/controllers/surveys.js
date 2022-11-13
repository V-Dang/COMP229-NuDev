let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//connect to survey model
let Survey = require("../models/survey");
//let Survey = surveyModel.Survey 

//GET Route for the survey list page - READ Operation
module.exports.displaySurveyList = (req, res, next) => {
    Survey.find((err, surveyList) => {
        if (err) {
            return console.error(err);
        } else {
            //console.log(contactlist)

            res.render("surveys/list", {title: "Surveys", SurveyList: surveyList, displayName: req.user ? req.user.displayName: ''});
            //render contact.ejs and pass title and contactlist variable we are passing contactsList object to ContactsList 
        }
    });
};

module.exports.displayTakeSurveyPage = (req, res, next) => {
    let id = req.params.id;
    Survey.findById(id, (err, Takesurvey) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.render("surveys/take", {title: Takesurvey.survey_name, takesurvey: Takesurvey, displayName: req.user ? req.user.displayName: ''});
        }
    })
}