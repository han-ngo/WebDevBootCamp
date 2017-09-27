var mongoose    = require("mongoose");

// SCHEMA SETUP
var trailsSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
      }
    ]
});


var Trail = mongoose.model("Trail", trailsSchema);

module.exports = Trail;