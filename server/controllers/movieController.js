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
    const meta = JSON.parse(req.body.meta);
    console.log(meta);
    Favorites.create({
      title: meta.title,
      vote_average: meta.vote_average,
      img_url: meta.poster_path,
      release_date: meta.release_date,
      genre_ids: JSON.stringify({ genre_ids: meta.genre_ids }),
      description: meta.overview,
    })
      .then(() => {
        res.status(200);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
  deleteMovie: (req, res) => {
    console.log(req.body);
    //inc
  },
};
