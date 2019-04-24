import React, { Component } from "react";
import RandomPup from "../../components/randompup/randompup";
import Alertmessage from "../../components/alert/alert";
import API from "../../utils/API";

class Discover extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
  };

  componentDidMount() {
    this.getRandomDog();
  }

  getRandomDog = () => {
    API.getDog()
      .then(res => this.setState({ image: res.data.message }))
      .catch(err => console.log(err));
  };

  handleSubmit = event => {
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    const newState = { ...this.state };

    if (btnType === "pick") {
      // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
      newState.match = 1 === Math.floor(Math.random() * 5) + 1;

      // Set newState.matchCount equal to its current value or its current value + 1
      // depending on whether the dog likes us
      newState.matchCount = newState.match
        ? newState.matchCount + 1
        : newState.matchCount;
    } else {
      newState.match = false;
    }
    this.setState(newState);
    this.getRandomDog();
  };

  render() {
    
    return (
      <div>
        <br/>
        <br />
        <br/>
        <h1 className="animated bounceInDown">The Tinder for Dogs</h1>
        <RandomPup image={this.state.image} handleSubmit={this.handleSubmit} />
        <br />
        <h3  className="animated bounceIn delay-2s">Matched {this.state.matchCount} Dogs 💖</h3>
        <Alertmessage style={{ opacity: this.state.match ? 1 : 0 }} type="success">
          Yay! That Pup Likes You Too!!!
        </Alertmessage>
      </div>
    );
  }
}

export default Discover;
