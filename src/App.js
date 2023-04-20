import React from 'react';
import './App.css';
import Search from './components/Search';
import CurrentWeather from './components/current-weather/currentWeather';

const handleOnSearchChange = (searchData) => {
  console.log(searchData.value)
}

function App() {
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather />
    </div>
    
  );
}

export default App;
