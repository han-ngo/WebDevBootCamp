var mongoose = require("mongoose");
var Trail = require("./models/trail");
var Comment = require("./models/comment");

var data = [
    {
      name: "Angel Landings",
      image: "https://s3-us-west-2.amazonaws.com/newscasticassets/images/07e06d3c-d3a9-4151-8a34-bde8cc06f78c.jpg",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      name: "Buckskin Gulch",
      image: "https://s3-us-west-2.amazonaws.com/newscasticassets/images/0fd4b41a-6f7c-4c6a-a8e6-ebf0094c7550.jpg",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      name: "Delicate Arch",
      image: "https://s3-us-west-2.amazonaws.com/newscasticassets/images/39b549ad-15aa-42f9-837d-0db5b7ad1169.jpg",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      name: "Queen's Garden Trail",
      image: "https://s3-us-west-2.amazonaws.com/newscasticassets/images/3a3eae80-605f-4865-99ef-09c54acc5839.jpg",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
]

function seedDB() {
    // remove all trails
    Trail.remove({}, function (err) {
        // if (err)
        // {
        //     console.log(err);
        // }
        // else 
        // {
        //     // add a few trails
        //     data.forEach(function (seed) {
        //         Trail.create(seed, function(err, trail){
        //             if (err) {
        //                 console.log(err);
        //             } else {
        //                 // add a comment
        //                 Comment.create(
        //                     {
        //                         text: "This place is so great! I would love to come here again with my family~",
        //                         author: "Mia"
        //                     }, function(err,comment) {
        //                         if (err) {
        //                             console.log(err);
        //                         } else {
        //                             trail.comments.push(comment);
        //                             trail.save();
        //                         }
        //                     })
        //             }
        //         });
        //     })
        // }
    });
}

module.exports = seedDB;
