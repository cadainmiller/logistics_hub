
let mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },

    lname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        //required: true
    },

    trn: {
        type: Number,
        //required: true
    },
    address1: {
        type: String,
        //required: true
    },

    address2: {
        type: String,
        //required: true
    },

    state: {
        type: String,
        //required: true
    },

    zip: {
        type: String,
        //required: true
    },

    country: {
        type: String,
        //required: true
    },

    type: {
        type: String,
        //required: true
    },

    pickup: {
        type: String,
        //required: true
    }
  });

 
  var User = module.exports = mongoose.model('User', userSchema);