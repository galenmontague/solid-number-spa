import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import Axios from 'axios';


export default class OrganizationForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      orgName: '',
      ein: '',
      email: '',
      password: ''
    };
    // BINDINGS
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ''
    });
  }

  handleSubmit(event) {
  }

  render() {
    return (
      <div>
        <div className="create-organization-form">
          <form onSubmit={this.handleSubmit}>
              <label htmlFor="email"> Company Email</label>
              <input id="email" placeholder="example@solidnumber.com" type="text"/>
              <label htmlFor="ein"> Employer Identification Number</label>
              <input  id="ein" placeholder="*******1423" type="number"/>
              <label htmlFor="password"> Password</label>
              <input id="password" placeholder="Password for Admin" type="password"/>
              <label htmlFor="verify-password"> Verify Password</label>
              <input id="verify-password" placeholder="Verify Password" type="password"/>
          </form>
        </div>
      </div>
    );
  }
}