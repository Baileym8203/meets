import React, { Component } from "react";
class Event extends Component {
  state = {
    collapsed: true,
    summary: [],
    dateTime: [],
    timeZone: [],
    description: [],
    location: [],
  };

  handleTheClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;
    return (
      <div className="event">
        <h2 className="summary">{this.state.summary}</h2>
        <p className="this"></p>
        <p className="start-date">
          {this.state.dateTime} ({this.state.timeZone})
        </p>

        <p className="location">
          @{this.state.summary} | {this.state.location}
        </p>

        <button
          variant="outline-info"
          className={`${collapsed ? "show" : "hide"}-details`}
          onClick={this.handleTheClick}
        >
          {collapsed ? "Show Details" : "Hide Details"}
        </button>

        {!collapsed && (
          <div
            className={`extra-details ${
              this.state.collapsed ? "hide" : "show"
            }`}
          >
            <h3>About the event:</h3>
            <a href={event.htmlLink} rel="noreferrer" target="_blank">
              See details on Google Calendar
            </a>
            <p className="event-description">{this.state.description}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Event;
