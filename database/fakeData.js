var faker = require('faker');
//var db = require('./database.js');
var fs = require('fs');
const performance = require('performance-now');
const writeFile = fs.createWriteStream('fakeDataTwo.tsv');

 

//use this to generate random numbers and replace all the faker number calls

// var num = 0;
// var tracker = 0;
// var addDataToDatabase = function() {
//   num++;
//   //change the number in here to 10mil when you acheive fast write speed
//   var arr = [];
//   for (var i = tracker; i < tracker + 10000; i++) {
//     var obj={}
//     //console.log(i);
//`faker.random.words(5)\tfaker.date.past()\t""tt"" + faker.random.number(10000)\tfaker.random.word()\tfaker.image.imageUrl()\tfaker.random.number(10)\tfaker.random.number(2000)\tfaker.image.imageUrl()\tfaker.name.firstName() + ' ' + faker.name.lastName()\tfaker.name.firstName() + ' ' + faker.name.lastName()\tfaker.date.past()\tfaker.random.number(2) + "" hour and "" + faker.random.number(59) + "" minutes""\tfaker.random.number(10)\t[{character_name: faker.name.firstName() + ' ' + faker.name.lastName(), actor_name: faker.name.firstName() + ' ' + faker.name.lastName()}]\tfaker.random.word() + '|' + faker.random.word()\tfaker.date.past()\tfaker.name.firstName() + ' ' + faker.name.lastName()\tfaker.random.words(5)\tfaker.random.number(2000)\tfaker.random.number(200)\tfaker.random.words(10)\tfaker.random.words(10)\tfaker.random.number(1000)\n`
//       arr.push(obj);
//     }
//     tracker = i;


//     let timer = 0;
//     setInterval(()=>{
//       timer++
//     }, 1);

//     db.collection.insertMany(arr, (err, data)=>{
//       if(err){
//         throw(err)
//       } else if(num < 100){
//         clearInterval();
//         addDataToDatabase();
//         console.log(timer)
//       } else {
//         console.log('success')
//       }

//     })

// };

var num = 0;

var start = performance();

var randomNumber = function(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
  }


var addDataToDatabase = function(tracker) {

//var arr = [];
  //num++;
  //change the number in here to 10mil when you acheive fast write speed
  if(tracker < 10000){
  for (var i = 0; i < 1000; i++) {
    var str = `${faker.random.words(5)}\t${faker.date.past()}\ttt${randomNumber(1, 10000)}\t${faker.random.word()}\t${faker.image.imageUrl()}\t${randomNumber(1, 10)}\t${randomNumber(1, 2000)}\t${faker.image.imageUrl()}\t${faker.name.findName()}\t${faker.name.findName()}\t${faker.date.past()}\t${randomNumber(1, 2) + ' hour and '  + randomNumber(1, 59) + " minutes"}\t${randomNumber(1, 10)}\t${[{character_name: faker.name.findName(), actor_name: faker.name.findName()}]}\t${faker.random.word() + '|' + faker.random.word()}\t${faker.date.past()}\t${faker.name.findName()}\t${faker.random.words(5)}\t${randomNumber(1, 2000)}\t${randomNumber(1, 200)}\t${faker.random.words(10)}\t${faker.random.words(10)}\t${randomNumber(1, 1000)}\n`
    // var obj={}
    //var str = `${faker.name.findName()}`
    // //console.log(i);
    //   obj.Title = faker.random.words(5);
    //   obj.Year = faker.date.past();
    //   obj.imdbID = "tt" + faker.random.number(10000);
    //   obj.Type = faker.random.word();
    //   obj.Poster = faker.image.imageUrl();
    //   obj.review_average = faker.random.number(10);
    //   obj.review_count = faker.random.number(2000);
    //   obj.extra_images = faker.image.imageUrl();
    //   obj.director = faker.name.firstName() + ' ' + faker.name.lastName();
    //   obj.writer = faker.name.firstName() + ' ' + faker.name.lastName();
    //   obj.release_date = faker.date.past();
    //   obj.movie_length = faker.random.number(2) + " hour and " + faker.random.number(59) + " minutes";
    //   obj.movie_rating = faker.random.number(10);
    //   obj.actor_info = [{character_name: faker.name.firstName() + ' ' + faker.name.lastName(), actor_name: faker.name.firstName() + ' ' + faker.name.lastName()}];
    //   obj.movie_genre = faker.random.word() + '|' + faker.random.word();
    //   obj.review_date = faker.date.past();
    //   obj.reviewer = faker.name.firstName() + ' ' + faker.name.lastName();
    //   obj.review_title = faker.random.words(5);
    //   obj.reviews_number = faker.random.number(2000);
    //   obj.review_viewers = faker.random.number(200);
    //   obj.review = faker.random.words(10);
    //   obj.movie_description = faker.random.words(10);
    //   obj.movie_id = i;
      //arr.push(obj);
      

    //  fs.appendFile('./fakeDataTwo.json', JSON.stringify(arr), (err)=>{
    //   if(err) throw err;
    //   console.log('success');
    // }) 

    writeFile.write(str);
  }
  
    // writeFile.once('drain', ()=>{
    //   console.log('hit', tracker)
    // })
    // }
  //}
    setTimeout(function() {
      if(tracker % 100 === 0){
      console.log('hit', tracker)
      }
      addDataToDatabase(tracker + 1)}, 0)
    } else {
      writeFile.end();
    }
//writeFile.write(JSON.stringify(obj));
    
  };

addDataToDatabase(0);
writeFile.on('finish', function(){
  console.log((performance() - start)/1000)
});
  


