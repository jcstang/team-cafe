const express = require("express");
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");

const app = express();
const PORT = 3005;


// use stuff
// ===========================================
// chris told us just use it
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));  // lets express know where to find static files


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

// /form
app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "reservations.html"));
  });

// /views
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "tables.html"));
  });




app.listen(PORT, function() {
  console.log(`app listening on PORT ${chalk.blueBright(PORT)}`);
});