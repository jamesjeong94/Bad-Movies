const express = require("express");
const bodyParser = require("body-parser");
const movieRoutes = require("./routes/movieRoutes.js");

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/dist"));

//Routes
app.use("/movies", movieRoutes);

app.listen(3000, function () {
  console.log("listening on port 3000!");
});
