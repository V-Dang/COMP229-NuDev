//modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//let passport = require('passport');

//define survey  model
//let survey = require("../models/survey");

let surveyController = require('../controllers/surveys');


/* GET Survey List page. READ */
router.get("/", surveyController.displaySurveyList);
  
  //  GET the Survey Details page in order to add a new Survey
  router.get("/add", surveyController.addpage);
  
  // POST process the Survey  Details page and create a new Survey  - CREATE operation
  router.post("/add", surveyController.addprocesspage);
  
  // GET the Survey  Details page in order to edit an existing Survey- UPDATE operation
  router.get("/edit/:id", surveyController.displayeditpage );
  
  // POST - process the information passed from the details form and update the document- UPDATE operation
  router.post("/edit/:id", surveyController.processingeditpage);
  
  // GET - process the delete - DELETE operation
  router.get("/delete/:id", surveyController.deletepage );
  
  module.exports = router;

