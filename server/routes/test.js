let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to our Book Model
let Book = require('../models/test');

let testController = require('../controllers/test');


//Get Route for the book list page - read operation
router.get('/', testController.displayTestList);

module.exports = router;