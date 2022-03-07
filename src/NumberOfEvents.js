import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 50,
    infoText: "",
  };

  handleInputChange = (event) => {
    this.setState({
      numberOfEvents: event.target.value,
    });
    if (event.target.value > 50 || event.target.value < 1) { // adds in the errorAlert!
    this.setState({
    infoText: "type a number between 1 and 50"
    })
    } else { // Removes errorAlert
    this.setState({
    infoText: "",
    })
    }
  };

  render() {
    return (
      <div className="NumberOfEvents" style={{marginTop: "100px"}}>
        <ErrorAlert text={this.state.infoText} />
        <input
          type="number"
          className="numberOfEvents"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
