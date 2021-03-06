const Sequelize = require("sequelize");
const sqlDb = require("../../db/sql");
const config = require("../../config");
// const mysql = require("mysql");
require("dotenv").config();

//For SQL
const movies = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: "mysql",
});

const Favorites = movies.define("Favorite", {
  title: { type: Sequelize.STRING, unique: true },
  vote_average: Sequelize.FLOAT,
  poster_path: Sequelize.STRING,
  release_date: Sequelize.STRING,
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

module.exports = {
  Favorites: Favorites,
  Genres: Genres,
};
