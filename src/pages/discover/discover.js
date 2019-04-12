import React, { Component } from "react";

class Discover extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
  };
  render() {
    return (
      <div>
        <h1>Discover New Friends</h1>
        <h4>The Tinder for Dogs</h4>
      </div>
    );
  }
}

export default Discover;
