var express = require('express');
var app = express();
//In the first two lines, we import the passport module and the express-session, both of which we need to handle authentication.
var passport = require('passport')
// For Passport
// persistent login sessions
app.use(express.static("public"));
var session = require('express-session')

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); 
// session secret

app.use(passport.initialize());

app.use(passport.session()); 


//Then, we import the body-parser module. This extracts the entire body part of an incoming request and exposes it in a format that is easier to work with. In this case, we will use the JSON format.
var bodyParser = require('body-parser')
//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));


var env = require('dotenv').load();
var exphbs = require('express-handlebars')

//For Handlebars
// app.set('views', './app/views')
app.engine('hbs', exphbs({
    defaultLayout: "main",
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Models
var models = require("./models");


//Routes
var authRoute = require('./routes/auth.js')(app,passport);

//load passport strategies
require('./config/passport/passport.js')(passport, models.user);

// Data for Questionnaires
var questions = [
  {
    q: "Do you have trouble forgetting in particular recently learned information?"
  }, {
    q: "Do you increasingly need to rely on memory aids (e.g., reminder notes or electronic devices) or family members for things they used to handle on their own?"
  }, {
    q: "Do you experience changes in your ability to develop and follow a plan, work with numbers, follow a familiar recipe or keeping track of monthly bills ? "
  }, {
    q: "Do you sometimes experience trouble driving to a familiar location?"
  }, {
    q: "Sometimes do you forget where you are or how you got there?"
  }, {
    q: "Are you experiencing difficulty reading, judging distance and determining color or contrast?"
  }, {
    q: "Are you having trouble following or joining a conversation ? "
  }, {
    q: "Do you lose things and then are unable to go back over your steps to find them again?"
  }, {
    q: "Do you have trouble keeping up with a favorite sports team or remembering how to complete a favorite hobby?"
  }, {
    q: "Do you lose track of the date or the season?"
  }, {
    q: "Do you eat until you feel uncomfortably full ?"
  }, {  
    q: "Do you eat large amounts of food when you don’t feel physically hungry ?"
  }, {  
    q: "Do you eat alone because you are embarrassed by how much you are eating?"
  }, {
    q: "Are you feeling depressed or very guilty after overeating?"
  }, {
    q: "Did you feel upset and promise yourself that you will control your eating?"
  }, {
    q: "Are you satisfied by your eating patterns?"
  }, {
    q: "Does your weight affect the way you feel about yourself?"
  }, {
    q: "Have any members of your family suffered from an eating  disorder?"
  }, {
    q: "Do you believe yourself to be fat when others say you are thin?"
  }, {
    q: "Would you say that food dominates your life?"
  }, {
    q: "Over the last several months, heave you be continually worried or been anxious about a number of events or activities in your daily life ?"
  }, {
    q: "Are you experiencing the inability to control excessive worry, occurring more days than not, for a least six months ?"
  }, {
    q: "Are you bothered by any of the following ? Restlessness, feeling keyed-up, or on edge. Being easily tired Irritability"
  }, {
    q: "Have you experienced changes in sleeping or eating habits?"
}, {
    q: "Do you often feel sad or depressed?"
  }, {
    q: "In the past year has the use of alcohol and drugs resulted in your failure to fulfill responsibilities with work, school, or family?"
  }, {
    q: "Has the use of drugs and alcohol gotten you arrested?"
  }, {
    q: "Have you driven under the influence of drugs and alcohol?"
  }, {
    q: "Do you often feel worthless or guilty?"
  }, {
    q: "Do you have problems concentrating?"
  }, {
    q: "Has there ever been a period of time when you felt so good or so hyper that other people thought you were not your normal self or you were so hyper that you got into trouble ?"
}, {
    q: "Have you been so irritable that you shouted at people or started fights or arguments ?"
  }, {
    q: "Do you feel much more self - confident than usual ?"
  }, {
    q: "Have you experienced being more talkative or spoke much faster than usual?"
  }, {
    q: "Do you have racing thoughts or been unable to slow your mind down?"
  }, {
    q: "Have you been much more active or did many more things than usual?"
  }, {
    q: "Have you done things that were unusual for you or that other people might have thought was excessive, foolish, or risky?"
  }, {
    q: "Have any of your blood relatives (i.e. children, siblings, parents, grandparents, aunts, uncles) had manic-depressive illness or bipolar disorder?"
  }, {
    q: "Have you spent money compulsively in a way that got you or your family into trouble?"
  }, {
    q: "Do you find that you are more social or outgoing than usual, for example, you telephoned friends in the middle of the night?"
  }, {
    q: "Do you hear, see, or feel things that do not exist ?"
  }, {
    q: "Do you have false beliefs, especially based on fear or suspicion of things that are not real ?"
  }, {
    q: "Do you jump between unrelated topics, making strange connections between thoughts ?" 
  }, {
    q: "Are you unduly suspicious of individuals or organizations, believing them to be plotting to cause them harm?"
  }, {
    q: "Do you have clearly false but strongly held belief in having a special power or authority - for instance, they may believe that they are a world leader?"
  }, {
    q: "Are you becoming more socially withdrawn?"
  }, {
    q: "Are you performing worse for a sustained period at school or work?"
  }, {
    q: "Have you becoming more distressed or agitated yet been unable to explain why?"
  }, {
    q: "Do you often exhibit odd behavior, such as repeating the same movements, or in other cases, do you stand still in the same position for hours?"
  }, {
    q: "Do you believe that different colors convey different messages?"
  },                            
];



//Sync Database
models.sequelize.sync().then(function () {

    console.log('Nice! Database looks fine')

}).catch(function (err) {

    console.log(err, "Something went wrong with the Database Update!")

});

app.get("/category1", function (req, res) {
    res.render("all-questions", {
        questionnaire: questions,
    });
});

app.get('/', function (req, res) {

    res.render("mainpage");

});

app.get("/main", function(req,res){
  res.render("mainpage");
});

app.get("/about_us", function(req,res){
  res.render("aboutus");
});

app.get("/make_an_appointment", function(req,res){
  res.render("make_an_appointment");
});

app.get("/contact_us", function(req,res){
  res.render("contact_us");
});

app.get("/chat", function (req, res) {
    res.render("chat");
  })

app.get("/doctors_and_therapist", function(req,res){
  res.render("doctors_and_therapist");
})

app.get("/supportive_resources", function(req,res){
  res.render("supportive_resources");
})

app.get("/aboutus", function(req,res){
  res.render("aboutus");
})

app.listen(5000, function (err) {

    if (!err)
        console.log("Site is live");
    else console.log(err)

});


