import React, { Component } from "react";
import Navbar from "./components/NavBar/Navbar";
import "./App.scss";

import TourList from "./components/TourList";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <TourList />
      </div>
    );
  }
}

export default App;
