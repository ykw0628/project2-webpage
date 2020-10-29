let mongoose = require('mongoose');

// create a model class
let testModel = mongoose.Schema({
    name: String,
    number: String,
},
{
    collection: "test"
});

module.exports = mongoose.model('test', testModel);