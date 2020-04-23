const axios = require("axios");
require("dotenv").config();

const key = process.env.API_KEY;
const getMoviesByGenre = (genre) => {
  return axios({
    method: "get",
    url: `https://api.themoviedb.org/3/discover/movie`,
    params: {
      api_key: key,
      genre: genre,
      sort_by: "vote_average.asc",
      language: "en-US",
      "vote_count.gte": 100,
    },
  })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const getGenreList = () => {
  return axios({
    method: "get",
    url: `https://api.themoviedb.org/3/genre/movie/list`,
    params: {
      api_key: key,
    },
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

module.exports = {
  getMoviesByGenre,
  getGenreList,
};
