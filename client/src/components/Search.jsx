import React from "react";
import axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      selected: "",
    };
    this.getGenres = this.getGenres.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.selectChange = this.selectChange.bind(this);
  }

  componentDidMount() {
    this.getGenres();
  }

  selectChange(e) {
    console.log(e.currentTarget.value);
    this.setState({
      selected: e.currentTarget.value,
    });
  }

  searchMovies() {
    this.props.search(this.state.selected);
  }

  getGenres() {
    axios({
      method: "get",
      url: "/movies/genres",
    }).then(({ data }) => {
      this.setState({
        genres: data.genres,
      });
    });
  }

  render() {
    return (
      <div className="search">
        <button
          onClick={() => {
            this.props.swapFavorites();
          }}
        >
          {this.props.showFaves ? "Show Results" : "Show Favorites"}
        </button>
        <br />
        <br />

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select onChange={this.selectChange}>
          {this.state.genres.map((genre) => {
            return (
              <option value={genre.id} key={genre.id} name={genre.name}>
                {genre.name}
              </option>
            );
          })}
        </select>
        <br />
        <br />

        <button onClick={this.searchMovies}>Search</button>
      </div>
    );
  }
}

export default Search;
