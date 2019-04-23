import React from "react";
import { Tabs } from "antd";
import { Table, Divider, Tag, Button, Select } from "antd";
import { Input } from "antd";

import { DatePicker } from "antd";

const Option = Select.Option;

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}
const columns = [
  {
    title: "Transaction",
    dataIndex: "transaction",
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: "Date/Time",
    dataIndex: "date"
  },
  {
    title: "Description",
    dataIndex: "description"
  },
  {
    title: "Amount",
    dataIndex: "amount"
  },
  {
    title: "Balance",
    dataIndex: "balance"
  }
];
const transactions = [];
const payments = [];
export default function() {
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Transactions" key="1">
        <div className="table-controls-wrapper">
          <h2>Transactions</h2>
          <RangePicker onChange={onChange} />
        </div>
        {/* <Table
          columns={columns}
          dataSource={data}
          scroll={{ x: 1200, y: 300 }}
        /> */}
        <Table
          style={{ maxWidth: "900px" }}
          scroll={{ x: 800, y: 300 }}
          columns={columns}
          dataSource={transactions}
        />
      </TabPane>
      <TabPane tab="Payments" key="2">
        <div className="table-controls-wrapper">
          <h2>Payments</h2>
          <RangePicker onChange={onChange} />
        </div>
        <Table
          style={{ maxWidth: "900px" }}
          scroll={{ x: 800, y: 300 }}
          columns={columns}
          dataSource={payments}
        />
      </TabPane>
      <TabPane tab="Deposit Transactions" key="3">
        <div className="table-controls-wrapper">
          <h2>Deposit Transactions</h2>
          <RangePicker onChange={onChange} />
        </div>
        <Table
          style={{ maxWidth: "900px" }}
          scroll={{ x: 800, y: 300 }}
          columns={columns}
          dataSource={payments}
        />
      </TabPane>
      <TabPane tab="Payment Settings" key="4">
        <div className="payment-settings">
          <div className="payment-info">
            <h2>Payroll Schedule</h2>
            <p>
              This information will be used to sync with your cardholders and
              payroll schedule. you can set up more than one payroll schedule
            </p>
          </div>
          <div className="payment-options">
            <div className="settings-wrapper">
              <label>Name your payroll Schedule</label>
              <Input placeholder="Basic usage" />
            </div>
            <div className="settings-wrapper">
              <label>Payroll Frequency</label>
              <Select defaultValue="lucy" onChange={handleChange}>
                <Option value="jack">Daily</Option>
                <Option value="lucy">Weekly</Option>
                <Option value="disabled">Bi-Monthly</Option>
                <Option value="Yiminghe">Monthly</Option>
              </Select>
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
  );
}
