import React, { Component } from "react";
import Pupcontainer from "./components/pupcontainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/about/about";
import Discover from "./pages/discover/discover";
import Search from "./pages/search/search";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Pupcontainer />
          <Route path="/" exact component={About} />
          <Route path="/discover" exact component={Discover} />
          <Route path="/search" exact component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
