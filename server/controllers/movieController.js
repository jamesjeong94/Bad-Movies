const { Favorites, Genres } = require("../models/movieModel.js");
const { getGenreList, getMoviesByGenre } = require("../helpers/apiHelpers.js");

const handleError = (res, err) => {
  console.log(err);
  // res.status(500);
};

module.exports = {
  getSearch: (req, res) => {
    console.log(req.query.genre);
    getMoviesByGenre(req.query.genre)
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
    // Favorites.create({
    //   title:
    //   vote_average: Sequelize.FLOAT,
    //   img_url: Sequelize.STRING,
    //   release_date: Sequelize.DATE,
    //   genre_ids: Sequelize.STRING,
    //   description: Sequelize.STRING,
    // })
    //inc
  },
  deleteMovie: (req, res) => {
    //inc
  },
};
