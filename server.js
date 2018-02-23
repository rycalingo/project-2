var express = require('express');
var app = express();
//In the first two lines, we import the passport module and the express-session, both of which we need to handle authentication.
var passport = require('passport')
// For Passport
// persistent login sessions

var session = require('express-session')

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); 
// session secret

app.use(passport.initialize());

app.use(passport.session()); 


//Then, we import the body-parser module. This extracts the entire body part of an incoming request and exposes it in a format that is easier to work with. In this case, we will use the JSON format.
var bodyParser = require('body-parser')
//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var env = require('dotenv').load();
var exphbs = require('express-handlebars')

//For Handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Models
var models = require("./app/models");

//Routes
var authRoute = require('./app/routes/auth.js')(app,passport);

//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);

//Sync Database
models.sequelize.sync().then(function () {

    console.log('Nice! Database looks fine')

}).catch(function (err) {

    console.log(err, "Something went wrong with the Database Update!")

});


app.get('/', function (req, res) {

    res.send('Welcome to Passport with Sequelize');

});


app.listen(5000, function (err) {

    if (!err)
        console.log("Site is live");
    else console.log(err)

});


