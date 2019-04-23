import React, { Component } from "react";

import {
  Drawer,
  Tabs,
  Button,
  Typography,
  message,
  Input,
  Table,
  Modal,
  Select
} from "antd";

const Option = Select.Option;

const { Text } = Typography;

const dataSource = [
  {
    key: "1",
    bank: "Wells Fargo",
    accountname: "Business Account 1",
    accountid: "erfasdf-vvwaeh-23gagf",
    accountnumber: "1234-************",
    routingnumber: "1234-************-**"
  }
];

const columns = [
  {
    title: "Bank",
    dataIndex: "bank",
    key: "bank"
  },
  {
    title: "Account Name",
    dataIndex: "accountname",
    key: "account"
  },
  {
    title: "Account id",
    dataIndex: "accountid",
    key: "accountid"
  },
  {
    title: "Account Number",
    dataIndex: "accountnumber",
    key: "accountnumber"
  },
  {
    title: "Rounting Number",
    dataIndex: "routingnumber",
    key: "routingnumber"
  }
];

export default class banking extends Component {
  constructor() {
    super();

    this.state = {
      visible: false,
      visiblem: false
    };
  }

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  showModal = () => {
    this.setState({
      visiblem: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visiblem: false
    });
    message.success("Deposit Successfuly Created");
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visiblem: false
    });
  };

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    return (
      <div>
        <h1>Banking</h1>
        <div
          style={{
            margin: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end"
          }}
        >
          <Button
            style={{ marginRight: "10px" }}
            type="primary"
            onClick={this.showModal}
          >
            Create Deposit{" "}
          </Button>
          <Button type="primary" onClick={this.showDrawer}>
            Conncet an Account{" "}
          </Button>
        </div>
        <Table dataSource={dataSource} columns={columns} />

        <Modal
          title="Create Deposit"
          visible={this.state.visiblem}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input
            placeholder="Deposit Amount"
            style={{ marginBottom: "15px" }}
          />

          <Select
            defaultValue="Wells Fargo - Business Account"
            style={{ width: "100%" }}
            onChange={this.handleChange}
          >
            <Option value="wells">Wells Fargo - Business Account</Option>
          </Select>
        </Modal>

        <Drawer
          title="Add a Banking Account"
          width={500}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Text>
            We handle all of our Banking Integrations with <a>Plaid.</a>
          </Text>
          <Input
            style={{ marginBottom: "10px", marginTop: "10px" }}
            addonBefore="Account Name"
            placeholder="Banking Business"
          />
          <Input
            style={{ marginBottom: "10px" }}
            addonBefore="Account Number"
            placeholder="1234-*********"
          />
          <Input
            style={{ marginBottom: "10px" }}
            addonBefore="Account Number"
            placeholder="1234-*********-**"
          />
          <div
            style={{
              width: "100%",
              marginTop: "15px",
              borderTop: "1px solid #e9e9e9",
              padding: "10px 16px",
              background: "#fff",
              textAlign: "right"
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={this.onClose} type="primary">
              Create
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}
