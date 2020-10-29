let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//create a referece to the model
let test = require('../models/test');

let Contacts = require('../models/contacts');

module.exports.displayTestList = (req, res, next) =>{
    test.find((err, testList) =>{
        if(err) {
            return console.error(err);
        }
        else{
            res.render('test', {title: 'Took List', TestList: testList});
            //console.log(BookList);
        }
    });
};
