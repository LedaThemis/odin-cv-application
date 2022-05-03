import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import uniqid from 'uniqid';

import '../styles/Experience.css';

import Job from './Job';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
    };

    this.handleAddJob = this.handleAddJob.bind(this);
    this.removeJob = this.removeJob.bind(this);
  }

  handleAddJob(e) {
    const currentJobKey = uniqid();
    const jobElement = <Job key={currentJobKey} removeJob={() => this.removeJob(currentJobKey)} />;

    this.setState((prevState) => ({
      jobs: prevState.jobs.concat([{ jobKey: currentJobKey, jobElement: jobElement }]),
    }));
  }

  removeJob(key) {
    this.setState((prevState) => ({
      jobs: prevState.jobs.filter(({ _, jobKey }) => jobKey !== key),
    }));
  }

  render() {
    return (
      <div id="experience-section">
        <h2 className="experience-section-title section-title">
          Experience
          <span id="add-job-span" onClick={this.handleAddJob}>
            <FaPlus />
          </span>
        </h2>
        <div id="jobs">{this.state.jobs.map(({ _, jobElement }) => jobElement)}</div>
      </div>
    );
  }
}

export default Experience;
