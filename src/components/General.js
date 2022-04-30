import React, { Component } from 'react';

import displayElement from '../helpers/displayElement';

import '../styles/General.css';

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      editable: true,
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
    const { name, email, phoneNumber, editable } = this.state;
    return (
      <div id="general-section">
        <div className="inputs-div">
          <div className="input-div">
            <label className="input-label" htmlFor="name">
              Name
            </label>

            {displayElement('name', 'name', 'text', 'name', name, this.onInputChange, editable)}
          </div>
          <div className="input-div">
            <label className="input-label" htmlFor="email">
              Email
            </label>

            {displayElement('email', 'email', 'email', 'email', email, this.onInputChange, editable)}
          </div>
          <div className="input-div">
            <label className="input-label" htmlFor="phoneNumber">
              Phone Number
            </label>

            {displayElement(
              'phoneNumber',
              'phoneNumber',
              'tel',
              'phoneNumber',
              phoneNumber,
              this.onInputChange,
              editable
            )}
          </div>
        </div>
        {editable && (
          <button
            id="general-section-submit"
            className="submit-button"
            type="button"
            onClick={() => this.setEditable('editable', false)}
          >
            Submit
          </button>
        )}
        {!editable && (
          <button
            id="general-section-edit"
            className="edit-button"
            type="button"
            onClick={() => this.setEditable('editable', true)}
          >
            Edit
          </button>
        )}
      </div>
    );
  }
}

export default General;
