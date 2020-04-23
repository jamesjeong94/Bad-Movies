require("dotenv").config();

module.exports = {
  host: "localhost",
  user: "root",
  password: process.env.DB_PW,
  database: "badmovies",
};
