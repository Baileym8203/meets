import React, { Component } from "react";
import { extractLocations } from "./api";
import { Container, Row, Col } from "react-bootstrap";

import "./App.css";
import "./nprogress.css";

import EventList from "./EventList";
import CitySearch from "./CitySearch";
import { getEvents } from "./api";
class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 50,
  };

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, this.state.numberOfEvents),
          currentLocation: location,
        });
      }
    });
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <Container className="App">
        <Row>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        </Row>
        <Row>
        <EventList
          events={this.state.events}
          numberOfEvents={this.state.numberOfEvents}
        />
        </Row>
      </Container>
    );
  }
}

export default App;
