// handling the passport library
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// access to mongoose User class
const User = mongoose.model('users');

// serialize user to have a cookie token which need for the next login of the user
passport.serializeUser((user, done) => {
    done(null, user.id)
});

// deserialize user, from the token cookie, turn it into the user infor
passport.deserializeUser((userId, done) => {
    // search or query to find userId
    User.findById(userId)
        .then(user => {
            done(null, user);
        })
});

// Handling passport
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.goolgeClientSecret,
    callbackURL: '/auth/google/callback',       //problem with https since it return http
    proxy: true,                                //solve the https http problem
    }, 
    (accessToken, refreshToken, profile, done) => {
        // find the first collection with googleId match profile.id, it will return promise
        User.findOne({
            googleId: profile.id,
        }).then((existingUser) => {
            if (existingUser) {
                // already have this user
                done(null, existingUser)
            } else {
                // we need to save the new user
                //create new instance of User with the profile from googleStrategy
                new User({
                    googleId: profile.id,
                }).save()   //save to the mongo database with save() - check on mlab.com where database was created
                    .then(user => done(null, user));
            }   
        })
    
    })
); //need 2 factors: client ID and client secret