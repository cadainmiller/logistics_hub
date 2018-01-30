// index.js
// load the things we need
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost/logostic');
var db = mongoose.connection;

db.once('open', function() {
    console.log ('Database connected!');
  });

//Check for DB error 
db.on('error', function(err){
    console.log(err);
});

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//Bring in Models
let User = require('./models/user');

// Set Public Folder
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// signup page 

app.get('/signup', function(req, res){
    User.find({}, function(err, user){
      if(err){
        console.log(err);
      } else {
        res.render('pages/signup', {
        });
      }
    });
  });

  app.post('/signup', function(req, res){
   let user = new User();
   user.fname = req.body.firstName;
   user.lname = req.body.lastName;

    user.save(function(err){
        if(err){
            console.log(err);
            return;
        } else{pages
            res.redirect('/');
       }
    });
    return;  
  });
  

// login page 
app.get('/login', function(req, res) {
    res.render('pages/login');
});

// Dashboard page 
app.get('/dasboard', function(req, res) {
    res.render('pages/dasboard');
});
// Addinvoices page 
app.get('/addinvoices', function(req, res) {
    res.render('pages/addinvoices');
});

// AdminPan page 
app.get('/adminpan', function(req, res) {
    res.render('pages/adminpan');
});

// All Package page 
app.get('/allpackage', function(req, res) {
    res.render('pages/allpackage');
});

// Invoices page 
app.get('/invoices', function(req, res) {
    res.render('pages/invoices');
});

// Manual Adding User page 
app.get('/manadduser', function(req, res) {
    res.render('pages/manadduser');
});

// Manual Edit User page  
app.get('/manedituser', function(req, res) {
    res.render('pages/manedituser');
});


app.listen(8080);
console.log('8080 is the magic port');
