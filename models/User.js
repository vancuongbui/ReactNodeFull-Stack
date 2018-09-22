// a mongoose model class
const mongoose = require('mongoose');
const { Schema } = mongoose;
// collection = many records,
// Each record may differ from one another - contrast to traditional relation database

// create an user instance
const userSchema = new Schema({
    googleId: String,   //always string for googleId

});

mongoose.model('users', userSchema) //add the new userSchema into the collection users