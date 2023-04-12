import React from 'react';
import './App.css';
import Search from './components/Search';

const handleOnSearchChange = (searchData) => {
  console.log(searchData)
}

function App() {
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
    </div>
    
  );
}

export default App;
