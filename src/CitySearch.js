import React, { Component } from "react";
import  { InfoAlert } from "./Alert";
import { OfflineAlert } from './Alert';

class CitySearch extends Component {
  state = {
    query: "",
    suggestions: [],
    showSuggestions: undefined,
    infoText: "",
    offlineText: ""
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true });
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0 ) {
      this.setState({
        query: value,
        infoText: // adds in the infoAlert
          "We can not find the city you are looking for. Please try another city",
        offlineText: ""
      });
    }  else {
      return this.setState({
        query: value,
        suggestions,
        infoText: "", // removes the infoAlert
        offlineText: ""
      });
    } if (!navigator.onLine) {
    this.setState({
    offlineText: "this is offline"
    })
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
      infoText: "",
    });

    this.props.updateEvents(suggestion);
  };

  render() {
    return (
      <div className="CitySearch">
        <OfflineAlert offline={this.state.offlineText} />
        <InfoAlert text={this.state.infoText}/>
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
          style={{marginTop: "100px"}}
          onFocus={() => {
            this.setState({ showSuggestions: true });
          }}
        />

        <ul
          className="suggestions"
          style={this.state.showSuggestions ? {} : { display: "none" }}
        >
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >
              {suggestion}
            </li>
          ))}
          <li onClick={() => this.handleItemClicked("all")}>
            <b>see all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;
