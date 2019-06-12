import React, { Component, useRef } from "react";
import "./App.css";

import { connect } from "react-redux";
import { API_CALL_REQUEST } from "./actions/actionTypes";
import NumberInput from "./NumberInput";

class App extends Component {
  render() {
    const { fetching, numberTrivia, onRequestNumber, error } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          {this.props.number}
          <h1>Numbers Trivia</h1>
          {numberTrivia ? (
            <h3>Trivia about number {this.props.number}</h3>
          ) : (
            <p>Click again for more trivia or enter a new number</p>
          )}
          <p>{this.props.numberTrivia}</p>
          <NumberInput />
          {/* <input ref={numRef} type="number" className="numberInput" />
          {fetching ? (
            <button className="btn btn-warning" disabled>
              Fetching...
            </button>
          ) : (
            <button className="btn btn-primary" onClick={onRequestNumber}>
              Submit
            </button>
          )} */}
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
