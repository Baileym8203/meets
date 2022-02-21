import React from 'react';
import logo from './logo.svg';
import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';

function App() {
  return (
    <div className="App">
      <CitySearch/>
      <EventList/>
    </div>
  );
}

export default App;
