//COMP229-NuDev
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a model class
let surveyModel = mongoose.Schema(
    {
        survey_title: String,
        survey_detail: String,
        survey_remark: String,
    },

    {
        collection: "survey",
    }
);

module.exports = mongoose.model('Contact', contactsModel);

//THEN create route to connect to book model in route folder
