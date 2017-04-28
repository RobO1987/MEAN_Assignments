console.log("routes.js file ready to go")

/////////////////////// REQUIREMENTS ///////////////////////
var models = require ("../controllers/models_controller.js")

/////////////////////// ROUTES ///////////////////////
module.exports = function(app){
  /////////////////////// CUSTOMERS ///////////////////////
  app.post("/api/customer", models.newcustomer);
  app.get("/api/customer", models.getcustomers);
  app.delete("/api/customer/:id", models.deletecustomer);
  /////////////////////// PRODUCTS ///////////////////////
  app.get("/api/product",models.getproducts);
  app.post("/api/product",models.addproducts);
  app.delete("/api/product/:id", models.deleteproduct)
  /////////////////////// ORDERS ///////////////////////
  app.get("/api/order",models.getorders);
  app.post("/api/order",models.createorders);
  app.delete("/api/order/:id",models.deleteorder);
}
