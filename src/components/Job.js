import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import displayElement from '../helpers/displayElement';

import '../styles/Job.css';

const Job = (props) => {
  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateUntil, setDateUntil] = useState('');
  const [editable, setEditable] = useState('');

  const { removeJob } = props;

  return (
    <div className="job">
      <div className="inputs-div">
        <div className="input-div">
          <label className="companyName-label" htmlFor="companyName">
            Company Name
            <span id="remove-job-span" onClick={removeJob}>
              <AiOutlineClose />
            </span>
          </label>
          {displayElement(
            'companyName',
            'companyName',
            'text',
            'companyName',
            companyName,
            (e) => setCompanyName(e.target.value),
            editable
          )}
        </div>
        <div className="input-div">
          <label htmlFor="positionTitle">Position Title</label>
          {displayElement(
            'positionTitle',
            'positionTitle',
            'text',
            'positionTitle',
            positionTitle,
            (e) => setPositionTitle(e.target.value),
            editable
          )}
        </div>
        <div className="input-div">
          <p className="job-date-title">Date</p>
          <div className="job-date">
            {displayElement(
              'dateFrom',
              'dateFrom',
              'date',
              'dateFrom',
              dateFrom,
              (e) => setDateFrom(e.target.value),
              editable
            )}{' '}
            -{' '}
            {displayElement(
              'dateUntil',
              'dateUntil',
              'date',
              'dateUntil',
              dateUntil,
              (e) => setDateUntil(e.target.value),
              editable
            )}
          </div>
        </div>
      </div>
      {editable && (
        <button
          id="education-section-submit"
          className="submit-button"
          type="button"
          onClick={() => setEditable(false)}
        >
          Submit
        </button>
      )}
      {!editable && (
        <button id="education-section-edit" className="edit-button" type="button" onClick={() => setEditable(true)}>
          Edit
        </button>
      )}
    </div>
  );
};

export default Job;
