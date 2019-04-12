import React, { Component } from "react";
import Navtabs from "./navtabs/navtabs";

class PupContainer extends Component {
  state = {
    search: "",
    result: []
  };

  render() {
    return (
      <div>
        <Navtabs />
      </div>
    );
  }
}

export default PupContainer;
