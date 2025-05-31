//The code in the app.js file is responsible for setting up the Express application and configuring it for use in your API.
// Here's a breakdown of what it does:

//This imports the Express framework, which is used to create the server and handle routing.
const express = require("express");

//This imports the config module, which likely contains configuration settings such as the port number for the server.
const config = require("./config");

//This imports the clients module, which is expected to contain route definitions for handling API requests related to "clients." However, the error indicates that the file or path ./modules/routes does not exist or is incorrect.
const clients = require("./modules/routes");

//This creates an instance of an Express application.
const app = express();

//config
//This sets the port number for the application using the value from the config file (config.app.port).
app.set("port", config.app.port);

//routes
//This sets up middleware to handle requests to the /api/clients endpoint using the routes defined in the clients module.
app.use("/api/clients", clients);

//This exports the app instance so it can be used in other files, such as index.js.
module.exports = app;
