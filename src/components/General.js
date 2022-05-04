import React, { useState } from 'react';

import displayElement from '../helpers/displayElement';

import '../styles/General.css';

const General = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [editable, setEditable] = useState(true);

  return (
    <div id="general-section">
      <h2 className="section-title">General Information</h2>
      <div className="inputs-div">
        <div className="input-div">
          <label className="input-label" htmlFor="name">
            Name
          </label>

          {displayElement('name', 'name', 'text', 'name', name, (e) => setName(e.target.value), editable)}
        </div>
        <div className="input-div">
          <label className="input-label" htmlFor="email">
            Email
          </label>

          {displayElement('email', 'email', 'email', 'email', email, (e) => setEmail(e.target.value), editable)}
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
            (e) => setPhoneNumber(e.target.value),
            editable
          )}
        </div>
      </div>
      {editable && (
        <button id="general-section-submit" className="submit-button" type="button" onClick={() => setEditable(false)}>
          Submit
        </button>
      )}
      {!editable && (
        <button id="general-section-edit" className="edit-button" type="button" onClick={() => setEditable(true)}>
          Edit
        </button>
      )}
    </div>
  );
};

export default General;
