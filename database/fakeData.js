var faker = require('faker');

for(var i =0; i < 100; i++){
//var date = faker.date.past()
//   console.log("Title", faker.fake("{{random.words(5)}}"))
// console.log("director:", faker.fake("{{name.firstName}} {{name.lastName}}"));
// console.log("writer:", faker.fake("{{name.firstName}} {{name.lastName}}"));
// console.log("poster:", faker.fake("{{image.imageUrl}}"));
console.log("length: " + faker.random.number(2) + " hour and " + faker.random.number(59) + " minutes");
//console.log("date:", date.split());
}