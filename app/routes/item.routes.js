const controller = require("../controllers/item.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/item/add", controller.itemadd);
  app.post("/api/item/update", controller.itemupdate);
  app.post("/api/item/selectionone", controller.itemselectionone);
  app.post("/api/item/selectionall", controller.itemselectionall);
  app.post("/api/item/deleted", controller.itemdeleted);
  app.post("/api/item/search", controller.itemsearch);
  
};
