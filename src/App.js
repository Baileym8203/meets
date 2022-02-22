import React from 'react';

import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';

function App() {
  return (
    <div className="App">
      <CitySearch />
      <EventList events={[{id: 'test'}, {id: "test"}, {id: "test"}, {id: "test"}]} />
    </div>
  );
}

export default App;
