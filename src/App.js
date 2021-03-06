import React, { Component } from "react";
import MainView from "./components/main-view";
import Header from "./containers/header";
import { Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route component={Header} />
        <MainView />
      </div>
    );
  }
}

export default App;
