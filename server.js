
const express = require("express"); 
const bodyParser = require("body-parser"); 
const exphbs = require("express-handlebars"); 
const app = express(); // Initalise Express Server

let PORT = process.env.PORT || 8080; // Set Default Port for Express and Heroku
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Equivalent???
const routes = require("./controllers/burgersController.js");
app.use("/", routes);

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});