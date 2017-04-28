console.log("/server/routes/routes.js");
var items = require("../controllers/items.js");

module.exports = function (app)
{
  app.get('/api/items', items.index);
  app.post('/api/items', items.create);
}
