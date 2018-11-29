import React, { Component } from 'react';
import './App.css';
import Navmenu from './navmenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navmenu/>
        </header>
      </div>
    );
  }
}

export default App;
