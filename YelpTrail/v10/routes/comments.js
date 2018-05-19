var express = require("express"),
    router  = express.Router({mergeParams: true});

var Trail = require("../models/trail"),
    Comment    = require("../models/comment");

// Comment New
router.get("/new", isLoggedIn, function(req, res) {
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

// Comment Create
router.post("/", isLoggedIn, function(req, res) {
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
            // add username and id to comment
            comment.author.id = req.user._id;
            comment.author.username = req.user.username;
            //save comment
            comment.save();
            trail.comments.push(comment);
            trail.save();
            res.redirect("/trails/" + trail._id);
          }
        });
     }
   });
});

// middleware
function isLoggedIn(req, res, next){
  if (req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
}

module.exports = router;
