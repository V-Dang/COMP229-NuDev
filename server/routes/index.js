//COMP229-Assignment-2-Vivian-Dang-302278335
let express = require("express");
let router = express.Router();

let indexController = require('../controllers/index');
let surveyController = require('../controllers/surveys')

/* GET home page. */
router.get("/", indexController.displayHomePage);

/* GET home page. */
router.get("/home", indexController.displayHomePage);

/* GET About Us page. */
router.get("/about", indexController.displayAboutPage);

/* GET Products page. */
router.get("/survey", surveyController.displaySurveyList);
//router.get("/survey/take", surveyController.displayTakeSurveyPage);

/* GET Services page. */
router.get("/create", indexController.displayCreateSurveyPage); 

/* GET Contact Us page. */
router.get("/contact", indexController.displayContactPage);

/* GET Route for displaying Login page create. */
router.get("/login", indexController.displayLoginPage);

/* GET Route for processing Register page. */
router.post("/login", indexController.processLoginPage);

/* GET Route for displaying Register page. */
router.get("/register", indexController.displayRegisterPage);

/* GET Route for processing Register page. */
router.post("/register", indexController.processRegisterPage);

/* GET Rout for displaying Register page. */
router.get("/logout", indexController.performLogout);

module.exports = router;
