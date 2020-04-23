const Sequelize = require("sequelize");
const sqlDb = require("../../db/sql");
const config = require("../../config");
// const mysql = require("mysql");
require("dotenv").config();
//Select one db to work with:

//For SQL
const movies = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: "mysql",
});

const Favorites = movies.define("Favorite", {
  title: Sequelize.INTEGER,
  vote_average: Sequelize.FLOAT,
  img_url: Sequelize.STRING,
  release_date: Sequelize.DATE,
  genre_ids: Sequelize.STRING,
  description: Sequelize.STRING,
});

const Genres = movies.define("Genre", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: Sequelize.STRING,
});

Favorites.hasMany(Genres, { foreignKey: "id" });
Genres.belongsTo(Favorites, { foreignKey: "id" });

movies.sync(() => {
  console.log("synced");
});
// const mongoDb = require("../../db/mongodb");

module.exports = movies;
