const sequelize = require('sequelize');
const connection = require('.');

const movies = connection.define('movies', {
  title: {
    type: sequelize.STRING,
    allowNull: false
  },
  year: {
    type: sequelize.STRING,
    allowNull: false
  },
  imdbid: {
    type: sequelize.STRING,
    allowNull: false
  },
  type: {
    type: sequelize.STRING,
    allowNull: false
  },
  poster:{
    type: sequelize.STRING,
    allowNull: false
  },
  review_average:{
    type: sequelize.INTEGER,
    allowNull: false
  },
  review_count: {
    type: sequelize.INTEGER,
    allowNull: false
  },
  extra_images:{
    type: sequelize.STRING,
    allowNull: false
  },
  director:{
    type: sequelize.STRING,
    allowNull: false
  },
  writer:{
    type: sequelize.STRING,
    allowNull: false
  },
  release_date:{
    type: sequelize.STRING,
    allowNull: false
  },
  movie_length:{
    type: sequelize.STRING,
    allowNull: false
  },
  actor_info:{
    type: sequelize.ARRAY(sequelize.STRING),
    allowNull: false
  },
  movie_rating:{
    type: sequelize.STRING,
    allowNull: false
  },
  movie_genre:{
    type: sequelize.STRING,
    allowNull: false
  },
  review_date:{
    type: sequelize.STRING,
    allowNull: false
  },
  reviewer:{
    type: sequelize.STRING,
    allowNull: false
  },
  review_title:{
    type: sequelize.STRING,
    allowNull: false
  },
  reviews_number:{
    type: sequelize.INTEGER,
    allowNull: false
  },
  review_viewers:{
    type: sequelize.INTEGER,
    allowNull: false
  },
  review:{
    type: sequelize.STRING,
    allowNull: false
  },
  movie_description:{
    type: sequelize.STRING,
    allowNull: false
  },
  movie_id:{
    type: sequelize.INTEGER,
    allowNull: false
  }
})

connection.sync({ force: false})
.then(()=>{
  console.log('successfully connected to db!')
})
.catch(err =>{
  console.log(err)
});

module.exports = movies;