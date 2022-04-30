import React, { Component } from 'react';

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, email, phoneNumber, onInputChange } = this.props;
    return (
      <div id="general-section">
        <div className="inputs-div">
          <div className="input-div">
            <label className="input-label" htmlFor="name">
              Name
            </label>

            <input id="name" name="name" type="text" data-statekey="name" value={name} onChange={onInputChange}></input>
          </div>
          <div className="input-div">
            <label className="input-label" htmlFor="email">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              data-statekey="email"
              value={email}
              onChange={onInputChange}
            ></input>
          </div>
          <div className="input-div">
            <label className="input-label" htmlFor="phoneNumber">
              Phone Number
            </label>

            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              data-statekey="phoneNumber"
              value={phoneNumber}
              onChange={onInputChange}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

export default General;
