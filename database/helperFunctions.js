var Movies = require("./database.js");
var myData = require("./movieData.js");
var mongoose = require("mongoose");
var faker = require('faker');

 //myData = JSON.stringify(myData);
// //initialize data in databse - only run once

var addDataToDatabase = function() {
  //change the number in here to 10mil when you acheive fast write speed
  for (var i = 0; i < 1000; i++) {
    console.log(i);
    new Movies({
      Title: faker.random.words(5),
      Year: faker.date.past(),
      imdbID: "tt" + faker.random.number(10000),
      Type: faker.random.word(),
      Poster: faker.image.imageUrl(),
      review_average: faker.random.number(10),
      review_count: faker.random.number(2000),
      extra_images: faker.image.imageUrl(),
      director: faker.name.firstName() + ' ' + faker.name.lastName(),
      writer: faker.name.firstName() + ' ' + faker.name.lastName(),
      release_date: faker.date.past(),
      movie_length: faker.random.number(2) + " hour and " + faker.random.number(59) + " minutes",
      movie_rating: faker.random.number(10),
      actor_info: [{character_name: faker.name.firstName() + ' ' + faker.name.lastName(), actor_name: faker.name.firstName() + ' ' + faker.name.lastName()}],
      movie_genre: faker.random.word() + '|' + faker.random.word(),
      review_date: faker.date.past(),
      reviewer: faker.name.firstName() + ' ' + faker.name.lastName(),
      review_title: faker.random.words(5),
      reviews_number: faker.random.number(2000),
      review_viewers: faker.random.number(200),
      review: faker.random.words(10),
      movie_description: faker.random.words(10),
      movie_id: i
    })
      .save()
      .then(() => {
        //console.log("saved to db");
      })
      .catch(err => {
        console.log("there was an error", err);
      });
  }
};

addDataToDatabase();

// //find data from database
// var retrieved = function(cb) {
//   Movies.find({})
//     .then(res => {
//       cb(res);
//     })
//     .catch(err => {
//       cb(err);
//     });
// };

// module.exports.addDataToDatabase = addDataToDatabase;
