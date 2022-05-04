import React from 'react';
import Education from './components/Education';
import General from './components/General';

import './App.css';
import Experience from './components/Experience';

const App = () => {
  return (
    <div className="App">
      <h1>CV Application</h1>
      <General />
      <Education />
      <Experience />
    </div>
  );
};

export default App;
