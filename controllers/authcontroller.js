var exports = module.exports = {}


exports.signup = function (req, res) {

    res.render('signup');

}

exports.signin = function (req, res) {

    res.render('signin');

}

exports.mainpage = function (req, res) {

    res.render('mainpage');

}

exports.logout = function (req, res) {

    req.session.destroy(function (err) {
        res.redirect('/');
    });

}