var mongoose = require("mongoose");
var mongoUri = "mongodb://localhost:27017/test";
// var addDataToDatabase = require("./helperFunctions.js").addDataToDatabase;
var movieData = require("./movieData.js");

mongoose.connect(
  mongoUri,
  { useNewUrlParser: true }
);

var db = mongoose.connection;

db.on("error", () => {
  console.log("there was an error connecting to db");
});

var movieSchema = new mongoose.Schema(
  {
    Title: String,
    Year: String,
    imdbID: String,
    Type: String,
    Poster: String,
    review_average: Number,
    review_count: Number,
    extra_images: String,
    director: String,
    writer: String,
    release_date: String,
    movie_length: String,
    actor_info: { type: Array, default: [] },
    movie_rating: String,
    movie_genre: String,
    review_date: String,
    reviewer: String,
    review_title: String,
    reviews_number: Number,
    review_viewers: Number,
    review: String,
    movie_description: String,
    movie_id: { type: Number, unique: true }
  },
  { autoIndex: false }
);

var Movies = mongoose.model("Movies", movieSchema);

// var addDataToDatabase = function(input, callback) {
//   for (var i = 0; i < input.length; i++) {
//     //console.log(input[i]["Title"]);
//     var instance = new Movies({
//       Title: input[i]["Title"],
//       Year: input[i]["Year"],
//       imdbID: input[i]["imdbID"],
//       Type: input[i]["Type"],
//       Poster: input[i]["Poster"],
//       review_average: input[i]["review_average"],
//       review_count: input[i]["review_count"],
//       extra_images: input[i]["extra_images"],
//       director: input[i]["director"],
//       writer: input[i]["writer"],
//       release_date: input[i]["release_date"],
//       movie_length: input[i]["movie_length"],
//       movie_rating: input[i]["movie_rating"],
//       actor_info: input[i]["actor_info"],
//       movie_genre: input[i]["movie_genre"],
//       review_date: input[i]["review_date"],
//       reviewer: input[i]["reviewer"],
//       review_title: input[i]["review_title"],
//       reviews_number: input[i]["reviews_number"],
//       review_viewers: input[i]["review_viewers"],
//       review: input[i]["review"],
//       movie_description: input[i]["movie_description"],
//       movie_id: input[i]["id"]
//     })
//       .save()
//       .then(() => {
//         console.log("saved to db");
//       })
//       .catch(err => {
//         console.log("there was an error", err);
//       });
//     // instance.update({ _id: input[i]["id"] });
//   }
// };

db.once("open", () => {
  var dbAdded = false;

  console.log("succesfully connected to db");
});

module.exports = Movies;

// var instance = Movies.update(
//   { movie_id: input[i]["movie_id"] },
//   {
//     Title: input[i]["Title"],
//     Year: input[i]["Year"],
//     imdbID: input[i]["imdbID"],
//     Type: input[i]["Type"],
//     Poster: input[i]["Poster"],
//     review_average: input[i]["review_average"],
//     review_count: input[i]["review_count"],
//     extra_images: input[i]["extra_images"],
//     director: input[i]["director"],
//     writer: input[i]["writer"],
//     release_date: input[i]["release_date"],
//     movie_length: input[i]["movie_length"],
//     movie_rating: input[i]["movie_rating"],
//     actor_info: input[i]["actor_info"],
//     movie_genre: input[i]["movie_genre"],
//     review_date: input[i]["review_date"],
//     reviewer: input[i]["reviewer"],
//     review_title: input[i]["review_title"],
//     reviews_number: input[i]["reviews_number"],
//     review_viewers: input[i]["review_viewers"],
//     review: input[i]["review"],
//     movie_description: input[i]["movie_description"],
//     movie_id: input[i]["id"]
//   },
//   { upsert: true },
//   () => {
//     console.log("updating db");
//   }
// );
