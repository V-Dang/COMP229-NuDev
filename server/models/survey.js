//COMP229-NuDev
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a model class
let surveyModel = mongoose.Schema(
    {
        survey_date: "ISODate",
        survey_title: String,
        survey_subject: String,
        
    },

    {
        collection: "survey",
    }
);

module.exports = mongoose.model('survey', surveyModel);

//THEN create route to connect to book model in route folder
