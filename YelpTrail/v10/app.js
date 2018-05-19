var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    Trail           = require("./models/trail"),
    Comment         = require("./models/comment"),
    seedDB          = require("./seed"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    User            = require("./models/user"),
    methodOverride  = require("method-override");

var commentRoutes    = require("./routes/comments"),
    trailRoutes       = require("./routes/trails"),
    indexRoutes      = require("./routes/index");


mongoose.connect("mongodb://localhost/yelp_camp_v6", {useMongoClient: true});
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
// seedDB(); // seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
  secret: "the secret!",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Getting current users
app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  next();
});

// Require routes
app.use(indexRoutes);
app.use("/trails", trailRoutes);
app.use("/trails/:id/comments", commentRoutes);

app.listen(3001, 'localhost', function() {
  console.log("YelpCamp server is running!");
});
