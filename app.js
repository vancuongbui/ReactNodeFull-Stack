// all initial library
const express = require('express');     //for using common JS model
const mongoose = require('mongoose');   //import mongoose
const cookieSession = require('cookie-session');    //to heop express to access to cookie
const passport = require('passport');
const keys = require('./config/keys');

// import models
require('./models/User');
// require for authentication using google acount
require('./services/passport');     //just simply require since we did not export anything, just execute


// connect to mongo
mongoose.connect(keys.mongoDBUri, { useNewUrlParser: true });

const app = express();

// Create cookie using predefined cookieKey
app.use(
    cookieSession({
        // expect 2 diffenrent factors to be used
        maxAge: 30 * 24 * 60 * 60 * 1000,    //convert 30 days into miliseconds
        keys: [keys.cookieKey,],
    })
);

// make use of cookie
app.use(passport.initialize());
app.use(passport.session());

// calling the app for authentication
// authRoutes(app);
require('./routes/authRoutes')(app);
require('./routes/paymentRoutes')(app);

const PORT = process.env.PORT || 8080;  //

app.listen(PORT);   //http://localhost:5000/

