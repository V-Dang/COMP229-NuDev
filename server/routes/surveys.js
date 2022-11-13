//COMP229-Assignment-2-Vivian-Dang-302278335
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let passport = require('passport');

//connect to Books model
//let Book = require("../models/book");

let surveyController = require('../controllers/surveys');

router.get('/', surveyController.displaySurveyList);

router.get('/take/:id', surveyController.displayTakeSurveyPage);

router.get('/edit/:id', surveyController.displayEditSurveyPage);

module.exports = router;