// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");
const session = require('client-sessions');
const isAuthenticated = require("../config/middleware/authentication");
const db = require("../models");
//const socket = require('socket.io');
//const server = require('../server.js');
// const io = socket(server);
// let scrtWrd = [];

// Routes
// =============================================================
module.exports = function (app) {
  // Both the / and /home route sends user to home page
  app.get("/", function (req, res) {
    res.render("home");
  });

  app.get("/home", function (req, res) {
    res.render("home");
  });

  app.get("/about", function (req, res) {
    res.render("about-us");
  })

  app.get("/loginErr", function (req, res) {
    res.render('login', {
      errMsg: 'INCORRECT USERNAME/PASSWORD'
    });
  });

  // If user is authenticated, they may proceed to the list of all products, otherwise they are sent back the login page
  app.get("/login", function (req, res) {
    if (req.user)
      res.redirect("/list");
    else
      res.render("login");
  });


  // app.get("/chat/:setWord", function(req, res) {
  //   console.log(req.params.setWord);
  //   if(scrtWrd.indexOf(req.params.setWord) === -1)
  //       scrtWrd.push(req.params.setWord);
  //   res.send('');
  // });

  // io.on('connection', function (socket) { 
  //   console.log('Socket connection with id = ' + socket.id);
  //   for(let i = 0; i < scrtWrd.length; i++)
  //       socket.on(scrtWrd[i], function (data) {
  //           io.sockets.emit(scrtWrd[i], data);
  //       });
  //   socket.on('disconnect', function () { 
  //       console.log('Client disconnected.');
  //   });    
  // }); 


  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the products page.
  // Otherwise the user will be sent an error


  // app.post("/register", function (req, res) {
  //   console.log(req.body);
  //   res.redirect("products");
  // });
  app.get("/register", function (req, res) {
    res.render("register");
  });


  app.get("/products", isAuthenticated, function (req, res) {
    res.render("products");
  });

  app.get("/products/getUname", isAuthenticated, function (req, res) { //gets own username for chat setup 
    res.send(req.user.username);
  });

  app.get("/user/ownerGetUserName/:usrID", isAuthenticated, function (req, res) { //gets own username for chat setup 
    let usrID = req.params.usrID;
    if (req.user)
      db.User.findOne({
        where: {
          id: usrID
        }
      }).then(function (result) {
        res.send(result);
      });
  });

  app.get("/acct/:pgNumIn", isAuthenticated, function (req, res) {
    let pgNum = req.params.pgNumIn;
    if (pgNum === 'log')
      res.render("activity");
    else if (pgNum === 'messages')
      res.render("messages");
    else if (pgNum === 'account')
      res.render("account");
  });


};