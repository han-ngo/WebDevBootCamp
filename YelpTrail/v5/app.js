var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Trail       = require("./models/trail"),
    Comment     = require("./models/comment"),
    seedDB      = require("./seed");
    
mongoose.connect("mongodb://localhost/yelp_camp_v5");
mongoose.Promise = global.Promise; 
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
seedDB();

app.get("/", function(req, res) {
  res.render("landing");
});

// INDEX - Show all trails
app.get("/trails", function(req, res) {
  // Get all trails from DB
  Trail.find({}, function(err, allTrails){
    if (err){
      console.log(err);
    } else {
      res.render("trails/index", {trails: allTrails});
    }
  });
});

// CREATE - Create new trail
app.post("/trails", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newTrail = {name: name, image: image, description: desc};
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
app.get("/trails/new", function(req, res) {
  res.render("trails/new");
});

// SHOW - Show info about one trail
app.get("/trails/:id", function(req, res) {
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

//======================================================
// COMMENTS ROUTE
//======================================================

app.get("/trails/:id/comments/new", function(req, res) {
  // Find the trail with provided ID
   Trail.findById(req.params.id, function (err, trail) {
     if (err){
        console.log(err);
     } else {
        // Render new comment template with that campground
        res.render("comments/new", {trail: trail}); 
     }
   });  
});

app.post("/trails/:id/comments", function(req, res) {
    // Find the trail with provided ID
   Trail.findById(req.params.id, function (err, trail) {
     if (err){
        console.log(err);
        res.redirect("/trails");
     } else {
        Comment.create(req.body.comment, function(err, comment) {
          if (err) {
            console.log(err);
          } else {
            trail.comments.push(comment);
            trail.save();
            res.redirect("/trails/" + trail._id);
          }
        });
     }
   });  
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("YelpCamp server is running!");
});
