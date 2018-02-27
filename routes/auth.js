var authController = require('../controllers/authcontroller.js');


module.exports = function (app, passport) {


    app.get('/signup', authController.signup);


    app.get('/signin', authController.signin);


    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/mainpage',

        failureRedirect: '/signup'
    }

    ));


    app.get('/mainpage', isLoggedIn, authController.mainpage);



    app.get('/logout', authController.logout);


    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/mainpage',

        failureRedirect: '/signin'
    }

    ));


    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }

}