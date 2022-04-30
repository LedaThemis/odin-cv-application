import React, { Component } from 'react';
import Education from './components/Education';
import General from './components/General';

import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <General />
        <Education />
      </div>
    );
  }
}

export default App;
