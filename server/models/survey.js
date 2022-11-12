let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a model class
let surveyModel = mongoose.Schema(
    {
        survey_name: String, 
        survey_subject: String, 
        // survey_date: {
        //     type: Date,
        //     default: Date.now,
        // },
    },

    {
        collection: "surveys",
    }
);

module.exports = mongoose.model('Survey', surveyModel);