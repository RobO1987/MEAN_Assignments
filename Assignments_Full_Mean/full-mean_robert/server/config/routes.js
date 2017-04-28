console.log("/server/config/routes.js");
var items = require("../controllers/items");

module.exports = function (app){
  app.get("/api/items", items.index);
  app.post("/api/items", items.create);
}
