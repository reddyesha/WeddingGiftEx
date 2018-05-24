// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');

//configuration ================================================

mongoose.connect(configDB.url); //connect to our database

// require('./config/passport')(passport); // pass passport for configuration

//set up our express application 
app.use(morgan('dev')); // logs requests to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get info from html forms

app.set('view engine', 'ejs'); //sets up ejs for templating 

//required for passport
app.use(session({secret: 'iusedtolovescotch'})); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions
app.use(flash()); // use connect-flash for flash messaging (like 'psw incorrect')


// routes ==========================================================
require('./app/routes.js')(app, passport);

// launch ==========================================================
app.listen(port);
console.log('Listening on ' + port);
