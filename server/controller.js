var Movies = require("../database/database.js");

module.exports = {
  get: (req, res) => {
    //console.log(req.params.id);
    // title = req.body;
    Movies.find({ movie_id: req.params.id })
      .then(data => {
        console.log('this is the data', data)
        res.send(data);
      })
      .catch(err => {
        console.log(err, "there was an err");
      });
  }
};
