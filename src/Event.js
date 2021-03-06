import React, { Component } from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';

class Event extends Component {
  state = {
    collapsed: true,
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
          <div>
        <h2 className="summary">{event.summary}</h2>
        <p className="this">A NEW Event Emerged</p>
        <p className="start-date">
          {event.start.dateTime} ({event.start.timeZone})
        </p>

        <p className="location">
          @{event.summary} | {event.location}
        </p>

        <button
          variant="primary"
          style={{marginTop: "10px"}}
          className={`${collapsed ? "show" : "hide"}-details`}
          id="details"
          onClick={this.handleTheClick}
        >
          {collapsed ? "Show More" : "Hide More"}
        </button>
        </div>
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
            <p className="event-description">{event.description}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Event;
