import React, {Component} from 'react';
import Colums from './components/Colums';
import './App.css'
import Popup from './components/Popup';


class App extends Component {
  render() {
    return <div className="App">
        <Colums/>
        <Popup/>
    </div>
  }
}

export default App;
