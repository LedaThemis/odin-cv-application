import React, { Component } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import displayElement from '../helpers/displayElement';

import '../styles/Job.css';

class Job extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: '',
      positionTitle: '',
      dateFrom: '',
      dateUntil: '',
      editable: true,
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

  setEditable(statekey, newState) {
    this.setState({
      [statekey]: newState,
    });
  }

  render() {
    const { removeJob } = this.props;
    const { companyName, positionTitle, dateFrom, dateUntil, editable } = this.state;
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
              this.onInputChange,
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
              this.onInputChange,
              editable
            )}
          </div>
          <div className="input-div">
            <p className="job-date-title">Date</p>
            <div className="job-date">
              {displayElement('dateFrom', 'dateFrom', 'date', 'dateFrom', dateFrom, this.onInputChange, editable)} -{' '}
              {displayElement('dateUntil', 'dateUntil', 'date', 'dateUntil', dateUntil, this.onInputChange, editable)}
            </div>
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

export default Job;
