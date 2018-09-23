// search for: adding custom environment variable: github.com
// test mode: run npm test -> process.env.NODE_ENV === 'test'
// dev mode: run npm start -> process.env.NODE_ENV === 'development'
// prodection mode: run npm build -> process.env.NODE_ENV === 'production'
// variable need to begin with REACT_APP_ to avoid exposing key
// access the variable, for instance REACT_APP_GOOGLE_CLIENT_ID by: process.env.REACT_APP_GOOGLE_CLIENT_ID
if (process.env.NODE_ENV === 'production') {
    //go to the production environment
    module.exports = require('./prodKeys');
}
else {
    //go to the development
    module.exports = require('./devKeys');
}
// module.exports = require('./devKeys');

// module.exports = require('./prodKeys');