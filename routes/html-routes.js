const path = require("path");

function createRoutes(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "home.html"));
  });
}


// exports
module.exports = {
  createRoutes: createRoutes
}