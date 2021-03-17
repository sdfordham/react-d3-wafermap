import './App.css';
import Wafermap from './components/Wafermap.js';

var data = require('./waferdata.json');
var dimensions = {"width": 400, "height": 400}

function App() {
  return (
    <div className="App">
      <h3>Wafermap</h3>
      <Wafermap
       points={data.points}
       configuration={dimensions}
      />
    </div>
  )
}

export default App;
