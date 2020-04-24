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

  getFavorites: (req, res) => {
    Favorites.findAll()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        handleError(res, err);
      });
  },

  saveMovie: (req, res) => {
    const meta = req.body;
    Favorites.create({
      title: meta.title,
      vote_average: meta.vote_average,
      poster_path: meta.poster_path,
      release_date: meta.release_date,
      genre_ids: JSON.stringify({ genre_ids: meta.genre_ids }),
    })
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
  deleteMovie: (req, res) => {
    const meta = req.query;
    Favorites.destroy({
      where: { title: meta.title },
    })
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
};
