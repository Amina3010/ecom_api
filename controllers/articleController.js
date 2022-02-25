var express = require("express"),
User = require("../models/user"),
Article = require("../models/article"),
config = require("../config.js");

exports.getAllArticles = async function (req, res) {
  try {
    var articles = await Article.find();
    console.log(articles)
    res.json({
      articles: articles,
    });
  } 
    catch (error) {
      res.send("error");
  }
};