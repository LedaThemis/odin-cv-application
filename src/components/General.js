import React, { Component } from 'react';

import displayElement from '../helpers/displayElement';

import '../styles/General.css';

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, email, phoneNumber, onInputChange, editable, setEditable } = this.props;
    return (
      <div id="general-section">
        <div className="inputs-div">
          <div className="input-div">
            <label className="input-label" htmlFor="name">
              Name
            </label>

            {displayElement('name', 'name', 'text', 'name', name, onInputChange, editable)}
          </div>
          <div className="input-div">
            <label className="input-label" htmlFor="email">
              Email
            </label>

            {displayElement('email', 'email', 'email', 'email', email, onInputChange, editable)}
          </div>
          <div className="input-div">
            <label className="input-label" htmlFor="phoneNumber">
              Phone Number
            </label>

            {displayElement('phoneNumber', 'phoneNumber', 'tel', 'phoneNumber', phoneNumber, onInputChange, editable)}
          </div>
        </div>
        {editable && (
          <button id="general-section-submit" type="button" onClick={() => setEditable('generalEditable', false)}>
            Submit
          </button>
        )}
        {!editable && (
          <button id="general-section-edit" type="button" onClick={() => setEditable('generalEditable', true)}>
            Edit
          </button>
        )}
      </div>
    );
  }
}

export default General;
