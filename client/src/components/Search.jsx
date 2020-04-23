import React from "react";
import axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
    };
    this.getGenres.bind(this);
  }

  componentDidMount() {
    this.getGenres();
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

        <select>
          {this.state.genres.map((genre) => {
            return <option value={genre.id}>{genre.name}</option>;
          })}
          <option value="theway">The Way</option>
        </select>
        <br />
        <br />

        <button>Search</button>
      </div>
    );
  }
}

export default Search;
