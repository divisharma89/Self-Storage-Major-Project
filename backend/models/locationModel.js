const { Schema, model } = require('../connection');

// Here we are defining the structure of model
const myschema = new Schema({
    state : String,
    city : String,
    totalarea : Number,
    occupied : Number,
    lastUpdated : Date,
    type : String
});

// Here we are creating model
module.exports = model('locations', myschema);
