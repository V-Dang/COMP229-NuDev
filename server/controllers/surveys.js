let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//connect to survey model
let survey = require("../models/survey");
//let Survey = surveyModel.Survey 

//GET Route for the survey list page - READ Operation

module.exports.displaySurveyList = (req, res, next) => {
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
  };

  module.exports.addpage = (req, res, next) => {
    res.render("surveys/add", {title: "Create a Survey"
   }); 
};

   module.exports.addprocesspage = (req, res, next) => {
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
  };

module.exports.displayeditpage = (req, res, next) => {
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
  }; 

module.exports.processingeditpage = (req, res, next) => {
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
  };

module.exports.deletepage = (req, res, next) => {
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
  };
