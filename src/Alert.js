import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.marginBottom = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      marginBottom : this.marginBottom,
    };
  };

  render() {
    return (
      <div className="Alert-info">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "blue"  }
}

export { InfoAlert };

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "red";
  }

  render() {
    return (
      <div className="Alert-error">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

export { ErrorAlert };