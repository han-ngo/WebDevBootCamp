var express    = require("express"),
    router     = express.Router();

var Trail = require("../models/trail"),
    Comment    = require("../models/comment");

// INDEX - Show all trails
router.get("/", function(req, res) {
  // Get all trails from DB
  Trail.find({}, function(err, allTrails){
    if (err){
      console.log(err);
    } else {
      res.render("trails/index", {trails: allTrails, currentUser: req.user});
    }
  });
});

// CREATE - Create new trail
router.post("/", isLoggedIn, function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var author = {
    id: req.user._id,
    username: req.user.username
  }
  var newTrail = {name: name, image: image, description: desc, author:author};
  // Create a new trail and save to DB
  Trail.create(newTrail, function (err, newlyCreated){
    if (err) {
      console.log(err);
    } else {
      // Redirect back to trails page
      res.redirect("/trails");
    }
  });
});

// NEW - Create new trails
router.get("/new", isLoggedIn, function(req, res) {
  res.render("trails/new");
});

// SHOW - Show info about one trail
router.get("/:id", function(req, res) {
   // Find the trail with provided ID
   Trail.findById(req.params.id).populate("comments").exec( function(err, foundTrail) {
     if (err){
        console.log(err);
     } else {
        console.log(foundTrail);
        // Render show template with that campground
        res.render("trails/show", {trail: foundTrail});
     }
   });
});

// EDIT TRAIL ROUTE
router.get("/:id/edit", function(req, res){
  Trail.findById(req.params.id, function(err, foundTrail){
    if (err) {
      res.redirect("/trails");
    } else {
      res.render("trails/edit", { trail: foundTrail });
    }
  });
});

// UPDATE TRAIL ROUTE

function isLoggedIn(req, res, next){
  if (req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
}

module.exports = router;
