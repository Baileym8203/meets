import React, { Component } from "react";
import { extractLocations } from "./api";
import { extractSummarys } from "./api";

import "./App.css";
import './nprogress.css';

import EventList from "./EventList";
import CitySearch from "./CitySearch";
import { getEvents } from "./api";

class App extends Component {
  state = {
    events: [],
    locations: [],
    summarys: []
  };

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
      });
    });
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events), summarys: extractSummarys(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <EventList events={this.state.events} summarys={this.state.summarys} />
      </div>
    );
  }
}

export default App;
