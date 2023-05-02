import React, { useState, useEffect} from "react";
import './App.css';
import SearchBar from "./components/SearchBar";





function App() {


  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      backgroundColor:"black",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}

    className="App">
      <SearchBar />b
    </div>
  );
}

export default App;