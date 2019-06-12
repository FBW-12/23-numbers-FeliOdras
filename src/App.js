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
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Numbers Trivia</h1>
          <input type="number" defaultValue={this.props.number} />
          <button onClick={onRequestNumber()}>Click</button>
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
