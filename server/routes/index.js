let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);


/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Services page. */
router.get('/services', indexController.displayServicePage);


/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);


/* login / logout / register routes */

/* GET - Display Login Page */
router.get('/login', indexController.DisplayLoginPage);

/* POST - Process Login Page */
router.post('/login', indexController.ProcessLoginPage);

/* GET - Display Register Page */
router.get('/register', indexController.DisplayRegisterPage);

/* POST - Process Register Page */
router.post('/register', indexController.ProcessRegisterPage);

/* GET to perform Logout */
router.get('/logout', indexController.PerformLogout);

module.exports = router;
