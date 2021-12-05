import './App.css'
import data from './waferdata.json'
import React, { useState } from 'react'
import Wafermap from './components/Wafermap.js'

function App() {
  const [waferIdx, setWaferIdx] = useState(0)
  const dimensions = {'width': 400, 'height': 400}

  function nextWafer() {
    waferIdx === (data.length - 1) ?
      setWaferIdx(0) : setWaferIdx(waferIdx + 1)
  }

  return (
    <div className="App">
      <h3>Wafermap</h3>
      <Wafermap
        points={data[waferIdx].points}
        configuration={dimensions}
      />
      <button onClick={nextWafer}>Next Wafer</button>
    </div>
  )
}

export default App
