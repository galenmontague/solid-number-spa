import React, { Component } from 'react';
import { Card } from 'antd';
import exigo from '../../../static/assets/exigo.jpg'
import square from '../../../static/assets/square.png'
import paypal from '../../../static/assets/paypal.png'
import Axios from 'axios';

const cardStyle = {
  width: '150px',
  textAlign: 'center',
};


export default class IntegrationForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      integrations: [],
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
      <div className="form-int-wrapper">
        <div className="integration">
          <Card style={cardStyle}>
              <img src={exigo} height="75" width="75"/>
            </Card>
          <Card style={{ width: 150 }}>
              <img src={square} height="75" width="75"/>
            </Card>
          <Card style={{ width: 150 }}>
              <img src={paypal} height="75" width="75"/>
            </Card>
          </div>
          <div className="hr-sect">OR</div>
          <div className="new-integration">
              <label hmtlFor="newint">Create A New Payment Integration</label>
              <input id="newint" type="text"></input>
          </div>
      </div>
    );
  }
}