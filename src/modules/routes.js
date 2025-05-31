//The code in the routes.js file defines a simple Express router for handling requests.
//Here's a breakdown of what it does:

//This imports the Express framework, which is used to create the router.
const express = require("express");

//This creates a new router instance using express.Router(). Routers are used to define modular route handlers.
const router = express.Router();

//This creates a new router instance using express.Router(). Routers are used to define modular route handlers.
//This defines a route handler for GET requests to the root path (/). When a request is made to this endpoint, the server responds with the string "Hello, Clients".
router.get("/", function (req, res) {
  res.send("Hello, Clients");
});

//This exports the router instance so it can be used in other files, such as app.js.
module.exports = router;
