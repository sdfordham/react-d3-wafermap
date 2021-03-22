import './App.css';
import React, { useState } from 'react'
import Wafermap from './components/Wafermap.js';

function App() {
  const [wafer, setWafer] = useState(0)

  var data = require('./waferdata.json');
  var dimensions = {"width": 400, "height": 400}

  function nextWafer() {
    wafer === (data.length - 1) ?
      setWafer(0) : setWafer(wafer + 1)
  }

  return (
    <div className="App">
      <h3>Wafermap</h3>
      <Wafermap
       points={data[wafer].points}
       configuration={dimensions}
      />
      <button onClick={nextWafer}>Next Wafer</button>
    </div>
  )
}

export default App;
