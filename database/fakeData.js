const faker = require('faker');
//var db = require('./database.js');
const fs = require('fs');
const performance = require('performance-now');
const writeFile = fs.createWriteStream('fakeDataThree.tsv');



var randomNumber = function(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
  }


function writeData() {
  let start = performance();
  let i = 0;
  write();
  function write() {
    let ok = true;
    do {
      i++;
      if (i === 10000000) {
        
        // last time!
        writeFile.write(`${faker.random.word()}\t${faker.date.past()}\ttt${randomNumber(1, 10000)}\t${faker.random.word()}\t${'https://picsum.photos/200/300/?image=' + randomNumber(0, 1083)}\t${randomNumber(1, 10)}\t${randomNumber(1, 2000)}\t${'https://picsum.photos/200/300/?image=' + randomNumber(0, 1083)}\t${faker.name.findName()}\t${faker.name.findName()}\t${faker.date.past()}\t${randomNumber(1, 2) + ' hour and '  + randomNumber(1, 59) + " minutes"}\t${randomNumber(1, 10)}\t${[{character_name: faker.name.findName(), actor_name: faker.name.findName()}]}\t${faker.random.word() + '|' + faker.random.word()}\t${faker.date.past()}\t${faker.name.findName()}\t${faker.random.word()}\t${randomNumber(1, 2000)}\t${randomNumber(1, 200)}\t${faker.random.word()}\t${faker.random.word()}\t${i}\n`, 'utf-8', ()=>{
          writeFile.end();
        });
        
    
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writeFile.write(`${faker.random.word()}\t${faker.date.past()}\ttt${randomNumber(1, 10000)}\t${faker.random.word()}\t${'https://picsum.photos/200/300/?image=' + randomNumber(0, 1083)}\t${randomNumber(1, 10)}\t${randomNumber(1, 2000)}\t${'https://picsum.photos/200/300/?image=' + randomNumber(0, 1083)}\t${faker.name.findName()}\t${faker.name.findName()}\t${faker.date.past()}\t${randomNumber(1, 2) + ' hour and '  + randomNumber(1, 59) + " minutes"}\t${randomNumber(1, 10)}\t${[{character_name: faker.name.findName(), actor_name: faker.name.findName()}]}\t${faker.random.word() + '|' + faker.random.word()}\t${faker.date.past()}\t${faker.name.findName()}\t${faker.random.word()}\t${randomNumber(1, 2000)}\t${randomNumber(1, 200)}\t${faker.random.word()}\t${faker.random.word()}\t${i}\n`, 'utf-8');
      }
    } while (i < 10000000 && ok);
    if (i < 10000000) {
      // had to stop early!
      // write some more once it drains
      writeFile.once('drain', write);
    }
  }
  writeFile.on('finish', ()=>{
    let end = performance();
    console.log(`${(end - start)/1000} seconds`)
  })
}

writeData();





//var num = 0;

//var start = performance();




// var addDataToDatabase = function(tracker) {

// //var arr = [];
//   //num++;
//   //change the number in here to 10mil when you acheive fast write speed
//   if(tracker < 10000){
//   for (var i = 0; i < 1000; i++) {
//     var str = `${faker.random.words(5)}\t${faker.date.past()}\ttt${randomNumber(1, 10000)}\t${faker.random.word()}\t${faker.image.imageUrl()}\t${randomNumber(1, 10)}\t${randomNumber(1, 2000)}\t${faker.image.imageUrl()}\t${faker.name.findName()}\t${faker.name.findName()}\t${faker.date.past()}\t${randomNumber(1, 2) + ' hour and '  + randomNumber(1, 59) + " minutes"}\t${randomNumber(1, 10)}\t${[{character_name: faker.name.findName(), actor_name: faker.name.findName()}]}\t${faker.random.word() + '|' + faker.random.word()}\t${faker.date.past()}\t${faker.name.findName()}\t${faker.random.words(5)}\t${randomNumber(1, 2000)}\t${randomNumber(1, 200)}\t${faker.random.words(10)}\t${faker.random.words(10)}\t${randomNumber(1, 1000)}\n`
//     // var obj={}
//     //var str = `${faker.name.findName()}`
//     // //console.log(i);
//     //   obj.Title = faker.random.words(5);
//     //   obj.Year = faker.date.past();
//     //   obj.imdbID = "tt" + faker.random.number(10000);
//     //   obj.Type = faker.random.word();
//     //   obj.Poster = faker.image.imageUrl();
//     //   obj.review_average = faker.random.number(10);
//     //   obj.review_count = faker.random.number(2000);
//     //   obj.extra_images = faker.image.imageUrl();
//     //   obj.director = faker.name.firstName() + ' ' + faker.name.lastName();
//     //   obj.writer = faker.name.firstName() + ' ' + faker.name.lastName();
//     //   obj.release_date = faker.date.past();
//     //   obj.movie_length = faker.random.number(2) + " hour and " + faker.random.number(59) + " minutes";
//     //   obj.movie_rating = faker.random.number(10);
//     //   obj.actor_info = [{character_name: faker.name.firstName() + ' ' + faker.name.lastName(), actor_name: faker.name.firstName() + ' ' + faker.name.lastName()}];
//     //   obj.movie_genre = faker.random.word() + '|' + faker.random.word();
//     //   obj.review_date = faker.date.past();
//     //   obj.reviewer = faker.name.firstName() + ' ' + faker.name.lastName();
//     //   obj.review_title = faker.random.words(5);
//     //   obj.reviews_number = faker.random.number(2000);
//     //   obj.review_viewers = faker.random.number(200);
//     //   obj.review = faker.random.words(10);
//     //   obj.movie_description = faker.random.words(10);
//     //   obj.movie_id = i;
//       //arr.push(obj);
      

//     //  fs.appendFile('./fakeDataTwo.json', JSON.stringify(arr), (err)=>{
//     //   if(err) throw err;
//     //   console.log('success');
//     // }) 

//     writeFile.write(str);
//   }
  
//     // writeFile.once('drain', ()=>{
//     //   console.log('hit', tracker)
//     // })
//     // }
//   //}
//     setTimeout(function() {
//       if(tracker % 100 === 0){
//       console.log('hit', tracker)
//       }
//       addDataToDatabase(tracker + 1)}, 0)
//     } else {
//       writeFile.end();
//     }
// //writeFile.write(JSON.stringify(obj));
    
//   };

// addDataToDatabase(0);
// writeFile.on('finish', function(){
//   console.log((performance() - start)/1000)
// });
  


