import React from 'react';
import { Tabs } from 'antd';
import { Switch } from 'antd';
import { Select, Button, DatePicker } from 'antd';
import { Input } from 'antd';


const Option = Select.Option;

const TabPane = Tabs.TabPane;


function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

function callback(key) {
  console.log(key);
}

export default function(){
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Company Settings" key="1">
    <div className="table-controls-wrapper">
      <h1>General</h1>
    </div>
    <div className="settings-wrapper">
      <label>Company name</label>
      <Input placeholder="Solid Number" />
    </div>
    <div className="settings-wrapper">
      <label>Company Subtitle</label>
      <Input placeholder="Thinkers of fresh Ideas" />
    </div>
    <div className="settings-wrapper">
      <label>Company Phone Number</label>
      <Input placeholder="509-531-18567" />
    </div>
    <div className="settings-wrapper">
      <label>Company Email</label>
      <Input placeholder="info@solidnumber.com" />
    </div>
    <div className="settings-wrapper">
      <label>Company Website</label>
      <Input placeholder="www.solidnumber.com" />
    </div>
    <div className="settings-wrapper">
      <label>Company Address</label>
      <Input placeholder="" />
    </div>
    <div className="settings-wrapper">
      <label>Entity</label>
      <Input placeholder="LLC" />
    </div>
    <div className="settings-wrapper">
      <label>Tax Id</label>
      <Input placeholder="52-151623" />
    </div>
    <div className="settings-wrapper">
      <label>Landing page is</label>
        <Select defaultValue="login" onChange={handleChange}>
        <Option value="Login">login</Option>
        <Option value="Register">register</Option>
      </Select>
    </div>
    <div className="settings-wrapper">
      <label>Admin can acess</label>
      <Switch className="switch" defaultChecked onChange={onChange} />
    </div>
    <div className="settings-wrapper">
      <label>Employess can login</label>
      <Switch className="switch" defaultChecked onChange={onChange} />
    </div>
    <div className="button-wrapper-right">
        <Button type="primary">Save Settings</Button>
      </div>
  </TabPane>
    <TabPane tab="Integration Settings" key="2">
      <div className="table-controls-wrapper">
        <h1>Integrations</h1>
      </div>
      <div className="settings-wrapper">
        <label>Exigo Api Key</label>
        <Input placeholder="baon43bqeodfn29cj" />
      </div>
      <div className="settings-wrapper">
        <label>Exigo Api Secret Key</label>
        <Input placeholder="xxx-xxxxxx-xxxxxx-xxx" />
      </div>
      <div className="button-wrapper-right">
        <Button type="primary" style={{ marginRight: '15px'}}>Save Integration Settings</Button>
        <Button type="primary">Add New Integration</Button>
      </div>
    </TabPane>
    <TabPane tab="Payment Settings" key="3">
    <div className="payment-settings">
        <div className="payment-info">
          <h2>Payroll Schedule</h2>
          <p>This information will be used to sync with your cardholders and payroll schedule. you can set up more than one payroll schedule</p>
        </div>
      <div className="payment-options">
        <div className="settings-wrapper">
        <label>Name your payroll Schedule</label>
        <Input placeholder="Basic usage" />
        </div>
        <div className="settings-wrapper">
        <label>Payroll Frequency</label>
        <Input placeholder="Basic usage" />
        </div>
        <div className="settings-wrapper">
        <label>Select A Date</label>
        <DatePicker onChange={onChange} />
        </div>
        <div className="button-wrapper-right">
          <Button style={{ marginRight: '15px'}} type="primary">Save Payroll Schedule</Button>
          <Button  type="primary">Add New Schedule</Button>
        </div>
        </div>
      </div>
    </TabPane>
  </Tabs>
  )
}