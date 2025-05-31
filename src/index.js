//The code in the index.js file is responsible for starting the server for your API.
//Here's a breakdown of what it does:

const app = require("./app");
/*This line imports the app module from the app.js file. 
The app.js file is expected to export an Express application instance.*/

app.listen(app.get("port"), () => {
  console.log("Server is running on port ", app.get("port"));
});
/*app.listen() starts the server and listens for incoming requests on the port specified in the app.js file (app.set("port", config.app.port)).
The callback function logs a message to the console indicating that the server is running and specifies the port it's listening on.*/
