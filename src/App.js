import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";
import { API_CALL_REQUEST } from "./actions/actionTypes";

class App extends Component {
  render() {
    const { fetching, numberTrivia, onRequestNumber, error } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          {this.props.number ||
            `<img
            src=${logo} alt="logo" />`}
          <h1>Numbers Trivia</h1>
          <p>{this.props.numberTrivia}</p>
          <input type="number" />
          {fetching ? (
            <button className="btn btn-warning" disabled>
              Fetching...
            </button>
          ) : (
            <button className="btn btn-primary" onClick={onRequestNumber}>
              Submit
            </button>
          )}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    number: state.number,
    numberTrivia: state.numberTrivia,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestNumber: () => dispatch({ type: API_CALL_REQUEST })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
