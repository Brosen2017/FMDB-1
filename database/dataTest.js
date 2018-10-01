var faker = require('faker');
//var db = require('./database.js');
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
var db;

// Database Name
const dbName = "movies";

// Use connect method to connect to the server
var idk = function(err, client) {
  // assert.equal(null, err);
  if (err) {
    console.log(err);
  }
  console.log("Connected successfully to server");

  db = client.db(dbName);
  // console.log();
  // console.log(client.db(dbName));
  // client.close();

  insertDocs(db, (err, win) => {
    if (err) {
      console.log(error);
    } else {
      console.log(win);
    }

    // client.close();
  });
}

MongoClient.connect(
  url,
  idk
);

// console.log(mongoose, db, Movie)
function insertDocs(db, cb) {
  var bulk = db.collection('movies').initializeOrderedBulkOp();
  var batch = 1000;
  var arr = [];

  for (let i = 0; i < 1000000; i++) {
    let obj = {};
    obj.Title = faker.random.words(5);
      obj.Year = faker.date.past();
      obj.imdbID = "tt" + faker.random.number(10000);
      obj.Type = faker.random.word();
      obj.Poster = faker.image.imageUrl();
      obj.review_average = faker.random.number(10);
      obj.review_count = faker.random.number(2000);
      obj.extra_images = faker.image.imageUrl();
      obj.director = faker.name.firstName() + ' ' + faker.name.lastName();
      obj.writer = faker.name.firstName() + ' ' + faker.name.lastName();
      obj.release_date = faker.date.past();
      obj.movie_length = faker.random.number(2) + " hour and " + faker.random.number(59) + " minutes";
      obj.movie_rating = faker.random.number(10);
      obj.actor_info = [{character_name: faker.name.firstName() + ' ' + faker.name.lastName(), actor_name: faker.name.firstName() + ' ' + faker.name.lastName()}];
      obj.movie_genre = faker.random.word() + '|' + faker.random.word();
      obj.review_date = faker.date.past();
      obj.reviewer = faker.name.firstName() + ' ' + faker.name.lastName();
      obj.review_title = faker.random.words(5);
      obj.reviews_number = faker.random.number(2000);
      obj.review_viewers = faker.random.number(200);
      obj.review = faker.random.words(10);
      obj.movie_description = faker.random.words(10);
      obj.movie_id = i;
    arr.push(obj);
  }
  // arr = JSON.stringify(arr);
  // fs.writeFileSync('./data.json', arr);
  let timer = 0;
  setInterval(() => {
    timer++;
  }, 1);

  for (let i = 0; i < 1000000; i++) {
    bulk.insert(arr[i]);
    if (i % batch === 0) {
      console.log(timer);
      bulk.execute();
      bulk = db.collection('movies').initializeOrderedBulkOp();
    }
  }
  clearInterval();
  cb(null, "Success");
}

module.exports = url;