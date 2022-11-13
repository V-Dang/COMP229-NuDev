//modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//let passport = require('passport');

//define survey  model
let survey = require("../models/survey");

//let surveyController = require('../controllers/surveys');
//router.get('/', surveyController.displaySurveyList);

/* GET Survey List page. READ */
router.get("/", (req, res, next) => {
    // find all surveys in the Survey collection
    survey.find((err, surveyList) => {
      if (err) 
      {
        return console.error(err);
      } 
      else 
      {
        res.render("surveys/list", {
          title: "Surveys",
          SurveyList: surveyList});
        
      }
    });
  });
  
  //  GET the Survey Details page in order to add a new Survey
  router.get("/add", (req, res, next) => {
   res.render("surveys/add", {title: "Create a Survey"})
  });
  
  // POST process the Survey  Details page and create a new Survey  - CREATE operation
  router.post("/add", (req, res, next) => {
    let newSurvey = survey({
      "Surveyid": req.body.Surveyid,
      "Surveyname": req.body.survey_name,
      "Surveysubject": req.body.survey_subject
    });
    survey.create(newSurvey, (err, survey) => {
      if(err)
      {
        console.log(err);
        res.end(err);
      }
      else
      {
        //refresh the Survey list
        res.redirect("/survey");
      }
    });
  });
  
  // GET the Survey  Details page in order to edit an existing Survey- UPDATE operation
  router.get("/edit/:id", (req, res, next) => {
    let id = req.params.id;
    survey.findById(id, (err, surveytoEdit) => {
      if(err)
      {
        console.log(err);
        res.end(err);
      }
      else
      {
  // show the edit view
  res.render("surveys/edit", {title: "Edit Survey", survey:surveytoEdit})
      }
    });
  });
  
  // POST - process the information passed from the details form and update the document- UPDATE operation
  router.post("/edit/:id", (req, res, next) => {
    let id = req.params.id;
    
    let updateSurvey = survey({
     "_id" :id,
     "Surveyid": req.body.Surveyid,
     "Surveyname": req.body.survey_name,
     "Surveysubject": req.body.survey_subject
    });
    survey.updateOne({_id:id}, updateSurvey, (err) => {
      if(err)
      {
        console.log(err);
        res.end(err);
      }
      else
      {
        //refresh the survey list
        res.redirect("/survey");
  
      }
    });
  });
  
  // GET - process the delete - DELETE operation
  router.get("/delete/:id", (req, res, next) => {
    let id = req.params.id;
    survey.remove({_id: id}, (err) => {
    if(err)
      {
        console.log(err);
        res.end(err);
      }
      else
      {
      //refresh the survey list
      res.redirect("/survey");
      }
  });
  });
  
  module.exports = router;

