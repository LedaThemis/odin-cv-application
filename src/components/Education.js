import React, { Component } from 'react';

import displayElement from '../helpers/displayElement';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { schoolName, titleOfStudy, periodOfStudy, onInputChange, editable, setEditable } = this.props;
    return (
      <div id="education-section">
        <div className="inputs-div">
          <div className="input-div">
            <label className="input-label" htmlFor="schoolName">
              School Name
            </label>

            {displayElement('schoolName', 'schoolName', 'text', 'schoolName', schoolName, onInputChange, editable)}
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
              onInputChange,
              editable
            )}
          </div>
          <div className="input-div">
            <label className="input-label" htmlFor="periodOfStudy">
              Period of Study
            </label>

            {displayElement(
              'periodOfStudy',
              'periodOfStudy',
              'number',
              'periodOfStudy',
              periodOfStudy,
              onInputChange,
              editable
            )}
          </div>
        </div>
        {editable && (
          <button
            id="education-section-submit"
            className="submit-button"
            type="button"
            onClick={() => setEditable('educationEditable', false)}
          >
            Submit
          </button>
        )}
        {!editable && (
          <button
            id="education-section-edit"
            className="edit-button"
            type="button"
            onClick={() => setEditable('educationEditable', true)}
          >
            Edit
          </button>
        )}
      </div>
    );
  }
}

export default Education;
