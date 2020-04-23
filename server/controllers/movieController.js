const axios = require("axios");
const movieModel = require("../models/movieModel.js");
const apiHelpers = require("../helpers/apiHelpers.js");
const key = process.env.API_KEY;
//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    return axios({
      method: "get",
      url: `https://api.themoviedb.org/3/discover/movie?with_genres=&api_key=${key}`,
      data: {},
    })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
    // get the search genre
    // https://www.themoviedb.org/account/signup
    // get your API KEY
    // use this endpoint to search for movies by genres, you will need an API key
    // https://api.themoviedb.org/3/discover/movie
    // and sort them by horrible votes using the search parameters in the API
  },
  getGenres: (req, res) => {
    // make an axios request to get the list of official genres
    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list
    // send back
  },
  saveMovie: (req, res) => {},
  deleteMovie: (req, res) => {},
};

module.exports
  .getSearch()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
