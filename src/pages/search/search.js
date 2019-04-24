import React, { Component } from "react";
import SearchBar from "../../components/search/search";
import API from "../../utils/API";
import PuppyDetails from "../../components/puppycard/puppycard";

class Search extends Component {
  state = {
    search: "",
    breeds: [],
    results: []
  };

  componentDidMount() {
    this.breedList();
  }

  breedList = query => {
    API.getBreedList(query)
    .then(res => this.setState({ breeds: res.data.message}))
    .catch(err => console.log(err))
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  searchBreed = query => {
    API.getBreed(query)
      .then(res => this.setState({ results: res.data.message }))
      .catch(err => console.log(err));
  }; 

  handleSubmit = event => {
    event.preventDefault();
    this.searchBreed(this.state.search);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <h1 className="animated bounceInDown">Search a Breed 🐶</h1>
        <h5 className="animated bounceInDown">Look for a Random Dog</h5>
        <SearchBar
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          breeds={this.state.breeds}
        />
        <PuppyDetails results={this.state.results} />
      </div>
    );
  }
}

export default Search;
