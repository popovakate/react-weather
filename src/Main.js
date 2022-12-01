import React, { Component } from "react";
import { Route } from "react-router-dom";
import Weather from "./Weather";

export default class App extends Component {
  render() {
    return (
      <div>
        <Route
          exact={true}
          path="/"
          render={() => (
            <div className="App">
              <Weather city="Kyiv" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/mykolayiv"
          render={() => (
            <div className="App">
              <Weather city="Mykolayiv" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/odessa"
          render={() => (
            <div className="App">
              <Weather city="Odessa" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/lviv"
          render={() => (
            <div className="App">
              <Weather city="Lviv" />
            </div>
          )}
        />
      </div>
    );
  }
}
