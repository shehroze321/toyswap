# ToySwap
ToySwap is a full-stack, one-stop shop web application for people who want to get swap their unused toys with new or used ones from other users. There is no payment required to use ToySwap, we only require that you create an account so that you can navigate throughout our toy listings. In order to swap with another user, you need to have at least one toy of your own saved in our database, which you can upload after you've logged in. When you offer a toy to swap, the owner of the other toy has the option to confirm or deny your request. If they decide they want to swap theirs with yours, you both can say hello to your brand ~~new~~ used toys! This app works great with video game owners who are fed up with companies like Gamestop paying **a third of the price or less** when you want to trade your game in.

### [ToySwap](https://toyswap0808.herokuapp.com/) deployed on heroku

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.



### Prerequisites

```
Download mysql [mysql download](https://dev.mysql.com/downloads/mysql/)
```
Configure your mysql server connection and database to run on localhost. We used mysql workbench.


```
Create database (name) we used toyswap
```

### Installing
```
git clone https://github.com/full-stack-project-2/ToySwap.git
```
Change the congfig.json file to match your credentials in your local database.
```
npm install
```
## Deployment
For production env, we used Heroku's [Jawsdb add-on](https://elements.heroku.com/addons/jawsdb)

For a guide on how to set up your heroku deployment env, [click here](http://www.andyhang.com/post/heroku-deployment-with-sql/)

## Built With
* [bcrypt-nodejs](https://www.npmjs.com/package/bcrypt-nodejs) - Middleware used to Hash the User's passwords going into the database.
* [body-parser](https://www.npmjs.com/package/body-parser) - Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
* [connect-flash](https://www.npmjs.com/package/connect-flash) - The flash is a special area of the session used for storing messages.s
* [express](https://www.npmjs.com/package/express) - Framework we used to handle HTTP requests
* [express-handlebars](https://www.npmjs.com/package/express-handlebars) - Templating engine we used to render our *HTML* pages to the client.
* [materialize-css](http://materializecss.com/) - Front-end framework for styling
* [mysql2](https://www.npmjs.com/package/mysql2) - MySQL client for Node.js
* [nodemon](https://www.npmjs.com/package/nodemon) - Watches the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.
* [passport](https://www.npmjs.com/package/passport) - Middleware that authenticates requests from client
* [passport-local](https://www.npmjs.com/package/passport-local) - This module lets you authenticate using a username and password in your Node.js applications.
* [request](https://www.npmjs.com/package/request) - Request is designed to be the simplest way possible to make http calls. 
* [sequelize](https://www.npmjs.com/package/sequelize) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, SQLite and Microsoft SQL Server.
* [socket.io](https://www.npmjs.com/package/socket.io) - Socket.IO enables real-time bidirectional event-based communication.
* [jQuery](https://jquery.com/) - Front-end JavaScript library. 
* [Walmart API](https://developer.walmartlabs.com/docs) - Used to fill out dataset based on Walmart's best sellers in toys.


## Inspiration
Airbnb owns no property. Uber owns no cars. Facebook, creates no content. We decided to catch this drift and create a toy provider without actually owning *or selling* toys. If you've ever received a toy on your birthday without the receipt or wanted to sell a game you bought three days ago, you'd know the eternal consumer struggle of constantly having your value slashed in half or more. That's why we created an easy way to trade toys with other savvy toy owners. Before you throw away your old Beyblades or Cabbage Patch Kids, check out ToySwap.

## How we built it
When we began brainstorming the structure of this product, we know we wanted to follow best practice design patterns. We tried to modularize all of our files and divided the project into an MVC format. All the pages are rendered to the client via [express-handlebars](https://www.npmjs.com/package/express-handlebars). We used [express](https://www.npmjs.com/package/express) to simplify the HTTP requests to and from the server. Just about every *.handlebars* page rendered has it's accompanying JavaScript files to handle the front end event handlers like form submitting and button clicking. Most of the magic happens on the back-end, which is where you'll find our sequelize queries and routes to direct the client request to the appropriate view.


## Challenges we ran into
For this project, each group member pushed the boundaries of his or her knowledge. Because of this, we were constantly learning on the fly. Some of our core issues were:
* Developing a meaningful and original idea that solves a problem in society
* Truly understanding new packages, technologies and frameworks, namely 
  1. [passport](https://www.npmjs.com/package/passport)
  2. [socket.io](https://www.npmjs.com/package/socket.io) 
  3. [materialize-css](http://materializecss.com/)
* Time constraint; We had so many great ideas coming out of the gate but as we ran into bugs and setbacks, we realized that sometimes we have to **kill our darlings**.

## Accomplishments that we're proud of
For the most part, this app is fluid in it's rendering and redirection of pages. We tried to keep the file structure and code base as simple and understandable as possible. Integrating the chat function using [socket.io](https://www.npmjs.com/package/socket.io) and exploring a new CSS styling framework were some of the things we were exceptionally proud of. Lastly, pulling data from  [Walmart's API](https://developer.walmartlabs.com/docs) and integrating this data as the dataset of our database  asynchronously was a major accomplishment for us.


## What we learned
We learned the benefit of psuedocoding and brainstorming before jumping down a rabbit hole only to find a dead end. We took the time to map out how our project would work and how we could incorporate what we already know. More importantly, we set intermittent goals so that way we had something to work for each day or so. Lastly, we learned how to set realistic expectations so that way we wouldn't overwelhm ourselves early one, but also left room to innovate.


## What's next for ToySwap
We'd like to scale this application as best we can. Some of the ideas tossed around were to add toy categories i.e. stuffed animals, games, action figures etc. and then eventually departments as our user base grows. That way, we are no longer in the business of swapping toys, but everyday items like clothes, jewelry, shoes, coffee makers, etc. We also want to add a filter by price range query so you can see which users are offering products within the range of the product you want to trade. Typically, you want to have an equitable trade-off, so the closer two users are in terms of price range, the more likely both will agree to swap. We'd also like to edit the individual product page to make it a profile page and give users a little more stake in what their product page looks like. 


## Authors

- [Yubin Jamora](https://github.com/yubinjamora)
- [Conor Nolan](https://github.com/nolanconorj)
- [Alex Nieves](https://github.com/dogrock2)
- [Dariell Vasquez](https://github.com/Dquez)
