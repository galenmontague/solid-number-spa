import React, { Component } from 'react';
import { Steps, Button, message } from 'antd';
import OrgForm from './create-organization-form'
import BankConnectionForm from './create-bank-connection-form'
import IntegrationForm from './create-integration-connection-form'
import Axios from 'axios';

const Step = Steps.Step;

const steps = [{
  title: 'Create Organization',
  content: <OrgForm/>,
}, {
  title: 'Connect Your Bank',
  content: <BankConnectionForm/>,
}, {
  title: 'Choose your Integrations',
  content: <IntegrationForm/> ,
}];

export default class Register extends Component {
  constructor(props){
    super(props);

    this.state = {
      current: 0,
    };
 
    // BINDINGS
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  
  
  handleChange(event) {
  }
  handleSubmit(event) {
  }

  render() {
    const { current } = this.state;
    return (
      <div className="registration-wrapper">
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content shadow">
        {steps[current].content}
        </div>
        <div className="steps-action">
          {
            current < steps.length - 1
            && <Button type="primary" onClick={() => this.next()}>Next</Button>
          }
          {
            current === steps.length - 1
            && <Button type="primary" onClick={() => message.success('Processing complete!')}>Complete Registration</Button>
          }
          {
            current > 0
            && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
            )
          }
        </div>
      </div>
    );
  }
}