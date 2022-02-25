const express = require("express"),
session = require("express-session"),
  app = express(),
  authRoute = require("./routes/authRoute"),
  articleRoute = require("./routes/articleRoute"),
  auth = require('./middleware/auth.js')(),
  mongoose = require("mongoose"),
  passport = require("passport"),
  localStrategy = require("passport-local"),
  User = require("./models/user"),
  bodyParser = require("body-parser");

/* mongoose.connect("mongodb://localhost/sampledb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); */


dbconnexion = async () => {
  try {
    await mongoose.connect("mongodb+srv://aminata:amina@cluster0.bew7g.mongodb.net/hijab?retryWrites=true&w=majority", () => {
        console.log('Successfully connected to mongodb');
    });
  } 
  catch (error) {
    console.log(error);
  }
};
dbconnexion();

app.use(session({
  secret: 'SECRET',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))









app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(auth.initialize());
// Passport Config
passport.use(new localStrategy(User.authenticate()));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(authRoute);
app.use(articleRoute);

app.listen(3001, () => {
  console.log("Server Started at 3001");
});
