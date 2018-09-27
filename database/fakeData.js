var faker = require('faker');
var db = require('./database.js');

var num = 0;
var tracker = 0;
var addDataToDatabase = function() {
  num++;
  //change the number in here to 10mil when you acheive fast write speed
  var arr = [];
  for (var i = tracker; i < tracker + 10000; i++) {
    var obj={}
    //console.log(i);
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
    tracker = i;
    insert(arr);
  };

  addDataToDatabase();

  function insert(arr){
    let timer =0;
    setInterval(()=>{
      timer++
    }, 1000);

    db.collection.insertMany(arr, (err, data)=>{
      if(err){
        throw(err)
      } else if(num < 100){
        clearInterval();
        addDataToDatabase();
        console.log(timer)
      } else {
        console.log('success')
      }

    })
  };
  


