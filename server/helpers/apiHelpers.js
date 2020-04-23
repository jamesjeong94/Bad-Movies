const request = require("request");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = require("../../config.js");

const key = process.env.API_KEY;
// write out logic/functions required to query TheMovieDB.org
const getMoviesByGenre = (genre) => {
  return axios({
    method: "get",
    url: `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&api_key=${key}`,
    data: {},
  })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const getGenreList = () => {
  return axios({
    method: "get",
    url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`,
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

getMoviesByGenre(27).then((data) => {
  console.log(data);
});
// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file
