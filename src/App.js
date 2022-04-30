import React, { Component } from 'react';
import Education from './components/Education';
import General from './components/General';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      generalEditable: true,
      schoolName: '',
      titleOfStudy: '',
      periodOfStudy: NaN,
      educationEditable: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.setEditable = this.setEditable.bind(this);
  }

  onInputChange(e) {
    const input = e.target;
    const stateKey = input.dataset.statekey;
    this.setState({
      [stateKey]: input.value,
    });
  }

  setEditable(statekey, newState) {
    this.setState({
      [statekey]: newState,
    });
  }

  render() {
    const { name, email, phoneNumber, generalEditable, schoolName, titleOfStudy, periodOfStudy, educationEditable } =
      this.state;

    return (
      <div className="App">
        <General
          name={name}
          email={email}
          phoneNumber={phoneNumber}
          onInputChange={this.onInputChange}
          editable={generalEditable}
          setEditable={this.setEditable}
        />
        <Education
          schoolName={schoolName}
          titleOfStudy={titleOfStudy}
          periodOfStudy={periodOfStudy}
          onInputChange={this.onInputChange}
          educationEditable={educationEditable}
          setEditable={this.setEditable}
        />
      </div>
    );
  }
}

export default App;
