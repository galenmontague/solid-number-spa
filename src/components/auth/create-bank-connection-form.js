import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import Axios from 'axios';
import plaid from '../../../static/assets/plaid.svg'


export default class BankConnectionForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      bankHasConnected: false,
      routingNumber: '',
      accountNumber: '',
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
        { !this.state.bankHasConnected ? 
        <div className="connect-to-your-bank-button">
          <button> Connect to your Bank Securely with <img height="22" src={plaid}/></button>
        </div> :
          
          <form onSubmit={this.handleSubmit}>
              <label htmlFor="email">Routing Number</label>
              <input id="email" placeholder="example@solidnumber.com" type="text"/>
              <label htmlFor="ein"> Account Number</label>
              <input  id="ein" placeholder="*******1423" type="number"/>
              <label htmlFor="verify-password"> Verify Password</label>
              <input id="verify-password" placeholder="Verify Password" type="password"/>
          </form>
        }
        </div>
      </div>
    );
  }
}