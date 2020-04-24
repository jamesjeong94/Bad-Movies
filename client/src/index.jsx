import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
// import AnyComponent from './components/filename.jsx'
import Search from "./components/Search.jsx";
import Movies from "./components/Movies.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      favorites: [],
      showFaves: false,
    };
    this.getMovies = this.getMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
  }

  getMovies(genre) {
    axios({
      method: "get",
      url: "/movies/search",
      params: {
        genre: genre,
      },
      header: {
        "Content-Type": "application/json",
      },
    })
      .then(({ data }) => {
        this.setState(
          {
            movies: data,
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
      });
  }

  saveMovie(e) {
    let meta = e.currentTarget.getAttribute("meta");
    axios({
      method: "post",
      url: "/movies/save",
      body: { meta: meta },
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {})
      .catch((err) => {
        console.log(err);
        res.status(500);
      });
    // same as above but do something diff
  }

  deleteMovie() {
    // same as above but do something diff
  }

  swapFavorites() {
    //dont touch
    this.setState({
      showFaves: !this.state.showFaves,
    });
  }

  render() {
    return (
      <div className="app">
        <header className="navbar">
          <h1>Bad Movies</h1>
        </header>

        <div className="main">
          <Search
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
            search={this.getMovies}
          />
          <Movies
            movies={
              this.state.showFaves ? this.state.favorites : this.state.movies
            }
            showFaves={this.state.showFaves}
            saveMovie={this.saveMovie}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
