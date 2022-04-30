import React, { Component } from 'react';
import General from './components/General';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      generalEditable: true,
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
    const { name, email, phoneNumber, generalEditable } = this.state;

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
      </div>
    );
  }
}

export default App;
