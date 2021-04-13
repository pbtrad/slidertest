import React from 'react';
import Osc1 from "./components/Osc1";
import Filter from "./components/Filter";
import Keyboard from "./components/Keyboard";
import ADSR from "./components/ADSR";
import './App.scss';




function App() {
  

  return (
    <div className="App">
      <h1 className="center">sliders</h1>
      
      <Osc1 />
      <ADSR />
      <Filter />
      <Keyboard />
    </div>
  );
}

export default App;
