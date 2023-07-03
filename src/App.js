import React from 'react';
import Contador from './contador/contador';
import BarraSuperior from './components/barraSuperior';
import cartas from './components/cartas';

function App() {
  return (
    <div className="App">
      <Contador />
      <BarraSuperior />
    </div>
  );
}

export default App;
