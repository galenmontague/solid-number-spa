import React from 'react';
import { Tabs } from 'antd';
import { Table, Divider, Tag, Button } from 'antd';
import { Input } from 'antd';

import { DatePicker } from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

const columns = [ {
  title: 'Transaction',
  dataIndex: 'transaction',
  render: text => <a href="javascript:;">{text}</a>,

}, {
  title: 'Date/Time',
  dataIndex: 'date',
},
{
  title: 'Description',
  dataIndex: 'description',
},
{
  title: 'Amount',
  dataIndex: 'amount',
},
{
  title: 'Balance',
  dataIndex: 'balance',
}];
const data = [{
  key: '1',
  transaction: '557482996',
  date: '21 Jan 2019',
  description: 'Payroll',
  amount: '$76,03',
  balance: '$10,000'
},
{
  key: '2',
  transaction: '5576425696',
  date: '21 Jan 2019',
  description: 'Payroll',
  amount: '$2623.04',
  balance: '$10,000'
},
{
  key: '3',
  transaction: '571345346',
  date: '21 Jan 2019',
  description: 'Payroll',
  amount: '$354.62',
  balance: '$10,000'
},
{
  key: '4',
  transaction: '5823453466',
  date: '21 Jan 2019',
  description: 'Payroll',
  amount: '$354.21',
  balance: '$10,000'
},
{
  key: '5',
  transaction: '51136534',
  date: '21 Jan 2019',
  description: 'Payroll',
  amount: '$734.00',
  balance: '$10,000'
},
{
  key: '6',
  transaction: '6234653',
  date: '21 Jan 2019',
  description: 'Payroll',
  amount: '$344.40',
  balance: '$10,000'
},
{
  key: '7',
  transaction: '557482996',
  date: '21 Jan 2019',
  description: 'Payroll',
  amount: '$644.26',
  balance: '$10,000'
},
{
  key: '8',
  transaction: '557482996',
  date: '21 Jan 2019',
  description: 'Payroll',
  amount: '$82.00',
  balance: '$10,000'
},
{
  key: '9',
  transaction: '557482996',
  date: '21 Jan 2019',
  description: 'Payroll',
  amount: '$62.00',
  balance: '$10,000'
},
{
  key: '10',
  transaction: '557482996',
  date: '21 Jan 2019',
  description: 'Payroll',
  amount: '$72.00',
  balance: '$10,000'
},
{
  key: '12',
  transaction: '557482996',
  date: '21 Jan 2019',
  description: 'Payroll',
  amount: '$62.00',
  balance: '$10,000'
},
{
  key: '13',
  transaction: '557482996',
  date: '21 Jan 2019',
  description: 'Payroll',
  amount: '$34.52',
  balance: '$10,000'

},
{
  key: '14',
  transaction: '557482996',
  date: '21 Jan 2019',
  description: 'Payroll',
  amount: '$34.00',
  balance: '$10,000'
},
];

export default function(){
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Transactions" key="1">
    <div className="table-controls-wrapper">
      <h2>Transactions</h2>
      <RangePicker onChange={onChange} />
    </div>
        <Table columns={columns} dataSource={data} />,
    </TabPane>
    <TabPane tab="Payments" key="2">
    <div className="table-controls-wrapper">
      <h2>Payments</h2>
      <RangePicker onChange={onChange} />
    </div>
      <Table columns={columns} dataSource={data} />,
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
          <Button>Save Setting</Button>
        </div>
        </div>
      </div>
    </TabPane>
  </Tabs>
  )
}