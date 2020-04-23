const movieModel = require("../models/movieModel.js");
const { getGenreList, getMoviesByGenre } = require("../helpers/apiHelpers.js");

const handleError = (res, err) => {
  console.log(err);
  // res.status(500);
};

module.exports = {
  getSearch: (req, res) => {
    getMoviesByGenre(req.body)
      .then(({ results }) => {
        res.json(results).status(200);
      })
      .catch((err) => {
        handleError(res, err);
      });
  },

  getGenres: (req, res) => {
    getGenreList()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        handleError(res, err);
      });
  },
  saveMovie: (req, res) => {
    console.log(req.body);
    // movie.model(req.body);
  },
  deleteMovie: (req, res) => {},
};
