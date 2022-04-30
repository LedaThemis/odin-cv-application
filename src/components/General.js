import React, { Component } from 'react';

import '../styles/General.css';

class General extends Component {
  constructor(props) {
    super(props);
  }

  displayElement(htmlID, htmlName, htmlType, htmlStateKey, htmlValue, htmlOnChange) {
    if (this.props.editable) {
      return (
        <input
          id={htmlID}
          name={htmlName}
          type={htmlType}
          data-statekey={htmlStateKey}
          value={htmlValue}
          onChange={htmlOnChange}
        ></input>
      );
    } else {
      return <p>{htmlValue}</p>;
    }
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

            {this.displayElement('name', 'name', 'text', 'name', name, onInputChange)}
          </div>
          <div className="input-div">
            <label className="input-label" htmlFor="email">
              Email
            </label>

            {this.displayElement('email', 'email', 'email', 'email', email, onInputChange)}
          </div>
          <div className="input-div">
            <label className="input-label" htmlFor="phoneNumber">
              Phone Number
            </label>

            {this.displayElement('phoneNumber', 'phoneNumber', 'tel', 'phoneNumber', phoneNumber, onInputChange)}
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
