// handling all auth routes
const passport = require('passport');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Hello, I just want to see this very new line');
    })
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email'],
        // google have profile and email for using.
    }));
    
    // handle second route /auth/google/callback
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req, res) => {
            // success, redirect user to the main page - surveys page in this prject
            res.redirect('/surveys');
        }
    );
    

    // logout route
    app.get('/api/logout', (req, res) => {
        req.logout();
        // res.send(req.user);
        res.redirect('/');
    })

    // api/current_user route   - note that this is personal defined
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })
}

