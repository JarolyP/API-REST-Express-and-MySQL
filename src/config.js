//The code in the config.js file defines configuration settings for the application.
//Here's a breakdown of what it does:

module.exports = {
  app: {
    port: process.env.port || 4000,
  },
};
/*Exporting Configuration: 
The module.exports object is used to export
configuration settings so they can be accessed in other files (e.g., app.js).
*/
/*Port Configuration:
process.env.port: This checks for an 
environment variable named port. If it exists, the application will use its value.
|| 4000: If the environment variable is not set, the application defaults to port 4000.*/
