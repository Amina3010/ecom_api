const mongoose = require("mongoose"),
  passportLocalMongoose = require("passport-local-mongoose");
var articleSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true
  },
  prix:{
      type:String,
      required:true
  },
  
});
articleSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Article", articleSchema);
