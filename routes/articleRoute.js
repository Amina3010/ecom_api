var express = require("express");
var router = express.Router();
var articleController = require("../controllers/articleController");
var auth = require("../middleware/auth")();

router.get("/articles", auth.authenticate(), articleController.getAllArticles);
// router.get("/article", auth.authenticate(), articleController.getAllArticlesById);

module.exports = router;
