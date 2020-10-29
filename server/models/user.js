let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');
let Schema = mongoose.Schema;
let Model = mongoose.model;

let UserSchema = Schema({
   username: String,
   password: String,
   email: String,
   displayName: String,
   created: 
   {
        type: Date,
        default: Date.now()
   },
   updated:
   {
       type: Date,
       default: Date.now()
   }
},
{
    collection: 'users'
});

// configure options for User Model

let options = ({missingPasswordError: 'Wrong / Missing Password'});

UserSchema.plugin(passportLocalMongoose, options);

module.exports.Model = Model('User', UserSchema);