import React, { Component } from 'react';
import General from './components/General';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    const input = e.target;
    const stateKey = input.dataset.statekey;
    this.setState({
      [stateKey]: input.value,
    });
  }

  render() {
    const { name, email, phoneNumber } = this.state;

    return (
      <div className="App">
        <General name={name} email={email} phoneNumber={phoneNumber} onInputChange={this.onInputChange} />
      </div>
    );
  }
}

export default App;
