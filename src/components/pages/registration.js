import React, { Component } from 'react';
import Register from '../auth/register';
import Axios from 'axios';


export default class Registration extends Component {
  constructor(props){
    super(props);

    this.handleSuccessfulRegistration = this.handleSuccessfulRegistration.bind(this)
    this.handleUnsuccessfulRegistration = this.handleUnsuccessfulRegistration.bind(this)
  }

  handleSuccessfulRegistration () {
    // this.props.handleSuccessfulLogin();
    // this.props.history.push('/');
  }

  handleUnsuccessfulRegistration () {
    // this.props.handleUnsuccessfulLogin();
  }


  render() {
    return (
      <div className="registration-page-wrapper">
        <div className="column">
          <Register/>
        </div>
      </div>
    );
  }
}