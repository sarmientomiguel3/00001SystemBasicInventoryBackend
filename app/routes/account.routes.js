const controller = require("../controllers/account.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/account/refresh", controller.accountrefresh);
  
  app.post("/api/account/select", controller.accountselect);
  
  app.post("/api/account/uploadimage", controller.accountrefreshimage);
};
