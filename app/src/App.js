import React from 'react';
import './App.css';
import Title from "./components/Title";
import Joke from "./components/Joke";

function App() {
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       
          <Title />
          <Joke />
        
    </div>
  );
}

export default App;
