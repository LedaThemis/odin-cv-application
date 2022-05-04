import React, { useState } from 'react';

import displayElement from '../helpers/displayElement';

const Education = () => {
  const [schoolName, setSchoolName] = useState('');
  const [titleOfStudy, setTitleOfStudy] = useState('');
  const [periodOfStudy, setPeriodOfStudy] = useState('');
  const [editable, setEditable] = useState(true);

  return (
    <div id="education-section">
      <h2 className="section-title">Education</h2>
      <div className="inputs-div">
        <div className="input-div">
          <label className="input-label" htmlFor="schoolName">
            School Name
          </label>

          {displayElement(
            'schoolName',
            'schoolName',
            'text',
            'schoolName',
            schoolName,
            (e) => setSchoolName(e.target.value),
            editable
          )}
        </div>
        <div className="input-div">
          <label className="input-label" htmlFor="titleOfStudy">
            Title of Study
          </label>

          {displayElement(
            'titleOfStudy',
            'titleOfStudy',
            'text',
            'titleOfStudy',
            titleOfStudy,
            (e) => setTitleOfStudy(e.target.value),
            editable
          )}
        </div>
        <div className="input-div">
          <label className="input-label" htmlFor="periodOfStudy">
            Period of Study (yrs.)
          </label>

          {displayElement(
            'periodOfStudy',
            'periodOfStudy',
            'number',
            'periodOfStudy',
            periodOfStudy,
            (e) => setPeriodOfStudy(e.target.value),
            editable
          )}
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

export default Education;
