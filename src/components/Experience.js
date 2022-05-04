import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import uniqid from 'uniqid';

import '../styles/Experience.css';

import Job from './Job';

const Experience = () => {
  const [jobs, setJobs] = useState([]);

  const handleAddJob = (e) => {
    const currentJobKey = uniqid();
    const jobElement = <Job key={currentJobKey} removeJob={() => removeJob(currentJobKey)} />;

    setJobs(jobs.concat([{ jobKey: currentJobKey, jobElement: jobElement }]));
  };

  const removeJob = (key) => {
    setJobs(jobs.filter(({ _, jobKey }) => jobKey !== key));
  };

  return (
    <div id="experience-section">
      <h2 className="experience-section-title section-title">
        Experience
        <span id="add-job-span" onClick={handleAddJob}>
          <FaPlus />
        </span>
      </h2>
      <div id="jobs">{jobs.map(({ _, jobElement }) => jobElement)}</div>
    </div>
  );
};

export default Experience;
