let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to our contacts Model
let Contacts = require('../models/contacts');

let contactController = require('../controllers/contacts');

//Get Rout for the contacts list page - read operation
router.get('/', contactController.displayContactlist);

//Get Route for displaying the add page - create operation
router.get('/add', contactController.DisplayAddpage);

//post process the Add page
router.post('/add', contactController.processAddpage);

//Get Route for displaying the Update page - create operation
router.get('/update/:id', contactController.DisplayUpdatepage);

// post process Update page
router.post('/update/:id', contactController.processUpdatepage);
//get process the Delete page
router.get('/delete/:id', contactController.processDeletepage);
module.exports = router;