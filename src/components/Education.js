import React, { Component } from 'react';

import displayElement from '../helpers/displayElement';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: '',
      titleOfStudy: '',
      periodOfStudy: '',
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
    const { schoolName, titleOfStudy, periodOfStudy, editable } = this.state;
    return (
      <div id="education-section">
        <div className="inputs-div">
          <div className="input-div">
            <label className="input-label" htmlFor="schoolName">
              School Name
            </label>

            {displayElement('schoolName', 'schoolName', 'text', 'schoolName', schoolName, this.onInputChange, editable)}
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
              this.onInputChange,
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
              this.onInputChange,
              editable
            )}
          </div>
        </div>
        {editable && (
          <button
            id="education-section-submit"
            className="submit-button"
            type="button"
            onClick={() => this.setEditable('editable', false)}
          >
            Submit
          </button>
        )}
        {!editable && (
          <button
            id="education-section-edit"
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

export default Education;
