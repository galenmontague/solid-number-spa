import React, { Component } from 'react';
import { Tabs } from 'antd';
import { Table, Divider, Tag, Button, Modal, Input } from 'antd';
import { Upload, Icon, message } from 'antd';
import { Select, Radio } from 'antd';

const Option = Select.Option;
const TextArea = Input.TextArea;

const Dragger = Upload.Dragger;
const TabPane = Tabs.TabPane;

function handleChange(value) {
  console.log(`Selected: ${value}`);
}

const OPTIONS = ['HR', 'Pr', 'Sales'];

const props = {
  name: 'file',
  multiple: true,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function onChange(date, dateString) {
  console.log(date, dateString);
}

function callback(key) {
  console.log(key);
}

const columns = [ {
  title: 'Acct ID',
  dataIndex: 'accountId',
}, {
  title: 'Status',
  dataIndex: 'status',
  render: tags => (
    <span>
      {tags.map(tag => {
        let color
        if (tag === 'active') {
          color = 'green';
        } else if (tag === 'pending'){
          color = 'blue';
        } else {
          color = 'red'
        }
        return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
      })}
    </span>
  ),
},
{
  title: 'Name',
  dataIndex: 'name',
  render: text => <a href="javascript:;">{text}</a>,
},
{
  title: 'Dept',
  dataIndex: 'department',
},
{
  title: 'Pay Period',
  dataIndex: 'payPeriod',
},
{
  title: 'Net Pay',
  dataIndex: 'netPay',
},
{
  title: 'Max Pay',
  dataIndex: 'maxPay',
}];
const data = [{
  key: '1',
  accountId: '557482996',
  status: ['active', 'pending'],
  name: 'John Brown',
  department: 'HR',
  payPeriod: 'monthly',
  netPay: '$3,000',
  maxPay: '$2,500'
},
{
  key: '2',
  accountId: '5576425696',
  status: ['active'],
  name: 'John Brown',
  department: 'Sales',
  payPeriod: 'monthly',
  netPay: '$3,000',
  maxPay: '$2,500'
},
{
  key: '3',
  accountId: '571345346',
  status: ['non-active'],
  name: 'John Brown',
  department: 'Sales',
  payPeriod: 'monthly',
  netPay: '$3,000',
  maxPay: '$2,500'
},
{
  key: '4',
  accountId: '5823453466',
  status: ['active'],
  name: 'John Brown',
  department: 'Sales',
  payPeriod: 'monthly',
  netPay: '$3,000',
  maxPay: '$2,500'
},
{
  key: '5',
  accountId: '51136534',
  status: ['active', 'pending'],
  name: 'Megan Brown',
  department: 'Sales',
  payPeriod: 'monthly',
  netPay: '$3,000',
  maxPay: '$2,500'
},
{
  key: '6',
  accountId: '6234653',
  status: ['active'],
  name: 'Megan Brown',
  department: 'Sales',
  payPeriod: 'monthly',
  netPay: '$3,000',
  maxPay: '$2,500'
},
{
  key: '7',
  accountId: '557482996',
  status: ['non-active'],
  name: 'Megan Brown',
  department: 'Sales',
  payPeriod: 'monthly',
  netPay: '$3,000',
  maxPay: '$2,500'
},
{
  key: '8',
  accountId: '557482996',
  status: ['non-active'],
  name: 'John Brown',
  department: 'PR',
  payPeriod: 'monthly',
  netPay: '$3,000',
  maxPay: '$2,500'
},
{
  key: '9',
  accountId: '557482996',
  status: ['active'],
  name: 'John Brown',
  department: 'PR',
  payPeriod: 'monthly',
  netPay: '$3,000',
  maxPay: '$2,500'
},
{
  key: '10',
  accountId: '557482996',
  status: ['active'],
  name: 'John Brown',
  department: 'PR',
  payPeriod: 'monthly',
  netPay: '$3,000',
  maxPay: '$2,500'
},
{
  key: '12',
  accountId: '557482996',
  status: ['active'],
  name: 'Megan Brown',
  department: 'HR',
  payPeriod: 'monthly',
  netPay: '$3,000',
  maxPay: '$2,500'
},
{
  key: '13',
  accountId: '557482996',
  status: ['active'],
  name: 'John Brown',
  department: 'HR',
  payPeriod: 'monthly',
  netPay: '$3,000',
  maxPay: '$2,500'
},
{
  key: '14',
  accountId: '557482996',
  status: ['active'],
  name: 'John Brown',
  department: 'HR',
  payPeriod: 'monthly',
  netPay: '$3,000',
  maxPay: '$2,500'
},
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

export default class Admin extends Component {
  constructor(){
    super();
    
    this.state = {
      selectedItems: [],
      visible: false,
      loading: false



    }
  }
  handleChange = selectedItems => {
    this.setState({ selectedItems });
  };
  
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
      message.success(`Payment was succesfuly pushed!`);
    }, 3000);
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render( ){
    const { selectedItems, visible, loading } = this.state;
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));


    return (
      <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Users" key="1">
      <div className="table-controls-wrapper">
      <Modal
          wrapClassName="modal-wrapper"
          title="Push to Card Holders"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Push to Card
            </Button>,
          ]}
        >
        <div className="">
        <label>Choose an Account to push Funds</label>
        <Input placeholder="Primary Funding Account"/>
        </div>
        <div className="">
        <label>Enter an amount of funds to push</label>
        <Input placeholder="$500.00"/>
        </div>
        <div className="">
        <label>Write a note</label>
        <TextArea rows={4} onChange={onChange} />
        </div>
        </Modal>
        <h2>Employess</h2>
        <div>
          <Button onClick={this.showModal} style={{ marginRight: '15px' }} type="primary">Create Payout</Button>
          <Select
          mode="multiple"
          placeholder="Sort Table"
          value={selectedItems}
          onChange={this.handleChange}
          style={{ width: '150px' }}
        >
          {filteredOptions.map(item => (
            <Select.Option key={item} value={item}>
              {item}
            </Select.Option>
          ))}
        </Select>
        </div>
      
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </TabPane>
      <TabPane tab="Add Users" key="2">
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
        </Dragger>
      </TabPane>
    </Tabs>
    )
  }
}