console.log('Routes.js File Ready To Go')

/////////////////////// REQUIREMENTS ///////////////////////
var models = require('../controllers/models_controller.js')

/////////////////////// SERVER SIDE ROUTES ///////////////////////
module.exports = function(app){
  app.post("/api/users", models.register);
  app.post("/api/posts",models.addpost);
  app.get("/api/posts",models.getpost);
  app.post("/api/login", models.login);
  app.post("/api/comment", models.newcomment);
  app.get("/api/comments", models.getcomments)
}
