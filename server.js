// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const flash = require('connect-flash');
// Sets up the Express App
// =============================================================
const app = express();
const passport = require("./config/passport");
const session = require("express-session");
const PORT = process.env.PORT || 3000;
const socket = require('socket.io');


// Requiring our models for syncing
const db = require("./models");

let scrtWrd = [];
// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");
 

 
 
// Sets up the Express middleware to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Creating express app and configuring middleware needed for authentication
// We need to use sessions to keep track of our user's login status
//passport middleware methods
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
//flash is used to show a message on an incorrect login
app.use(flash());
app.use(express.static('public')); 


 
  
// Routes
// =============================================================
require("./routes/html-routes")(app);
require("./routes/user-api-routes")(app);
require("./routes/inventory-api-routes")(app);



// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force:false}).then(function() {
  let server = app.listen(PORT, function() {
    db.User.findAll({}).then(function(users){
      // Only insert's walmart into DB if the table was dropped, that way it's the first to go in and only happens once.
      if(users.length === 0){
        db.User.create({
          email: "walmart@walmart.com",
          username: "Walmart",
          password: "Walmart",
        })
        .then(function (walmart) {
        });
      }
    });
    console.log("App listening on PORT " + PORT); 
  });
 
  const io = socket(server);

  io.on('connection', function (socket) { 
    console.log('Socket connection with id = ' + socket.id);
    for(let i = 0; i < scrtWrd.length; i++)
        socket.on(scrtWrd[i], function (data) {
          console.log(scrtWrd);
            io.sockets.emit(scrtWrd[i], data);
        });
    socket.on('disconnect', function () { 
        console.log('Client disconnected.');
    });    
  });
});  

app.get("/chat/:setWord", function(req, res) {
  console.log(req.params.setWord);
  if(scrtWrd.indexOf(req.params.setWord) === -1)
      scrtWrd.push(req.params.setWord);
      
  res.send('');
});
 
app.get("/chat/del/:delWord", function(req, res) {
  console.log(req.params.delWord);
  if(scrtWrd.indexOf(req.params.delWord) !== -1)
      scrtWrd = scrtWrd.filter(e => e !== req.params.delWord);
      
  res.send('');
});

app.get("/chat/srch/:word", function(req, res) {
  if(scrtWrd.indexOf(req.params.word) === -1)
     res.send('false');
  else
     res.send('true');   
});

  