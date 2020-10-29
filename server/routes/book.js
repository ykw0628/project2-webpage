let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to our Book Model
let Book = require('../models/book');

let bookController = require('../controllers/book');


//Get Route for the book list page - read operation
router.get('/', bookController.displayBookList);

module.exports = router;