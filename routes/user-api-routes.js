const db = require("../models");
const passport = require("../config/passport");
module.exports = function (app) {
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/register", function (req, res) {
    db.User.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    }).then(function () {
      // User is passed login endpoint to be authenticated in the html routes file
      res.redirect(307, "/login");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    });
  });


  app.post('/login',
    passport.authenticate('local', {
      successRedirect: '/list',
      failureRedirect: '/loginErr',
      failureFlash: true
    })
  );



  // Route for logging user out
  // app.get("/logout", function(req, res) {
  //   req.logout();
  //   res.redirect("/");
  // });


  // app.get("/toys/:toyID/:userID", function (req, res) {
  //   // grabs the two parameters passed in from the ajax call.. its essential we have a user ID associated with the product we are searching for, or else we wont get back all the user's products		
  //   let toyID = req.params.toyID;
  //   let userID = req.params.userID;
  //   // toys/:toyId/:userID		
  //   let query = {};
  //   if (req.query.userID) {
  //     query.userID = req.query.userID;
  //   }
  //   // Here we add an "include" property to our options in our findAll query		
  //   // We set the value to an array of the models we want to include in a left outer join		
  //   // In this case, just db.Author		
  //   db.Inventory.findAll({
  //     where: query,
  //     include: [db.Inventory]
  //   }).then(function (dbInventory) {
  //     res.render("products", {
  //       toyID: toyID,
  //       inventory: dbInventory
  //     });
  //   });
  // });


  //   app.get("/products", function (req, res) { //<-- Just for testing... byAlex    		
  //     res.render("products");		
  //   });



};