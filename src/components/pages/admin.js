import React, { Component } from "react";
import {
  Drawer,
  Form,
  Col,
  Row,
  Select,
  Tabs,
  DatePicker,
  Radio,
  List,
  Typography,
  Upload,
  Icon,
  message,
  Table,
  Divider,
  Tag,
  Button,
  Modal,
  Input
} from "antd";
import axios from "axios";

const Option = Select.Option;
const TextArea = Input.TextArea;

const Dragger = Upload.Dragger;
const TabPane = Tabs.TabPane;

function handleChange(value) {
  console.log(`Selected: ${value}`);
}

const OPTIONS = ["HR", "Pr", "Sales"];

const props = {
  name: "file",
  multiple: true,
  action: "//https://api.solidnumber.com/api/v1/member/connect",
  onChange(info) {
    const status = info.file.status;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

function onChange(date, dateString) {
  console.log(date, dateString);
}
const columns = [
  {
    title: "Acct ID",
    dataIndex: "uuid"
  },
  // {
  //   title: "Status",
  //   dataIndex: "status",
  //   render: tags => (
  //     <span>
  //       {tags.map(tag => {
  //         let color;
  //         if (tag === "active") {
  //           color = "green";
  //         } else if (tag === "pending") {
  //           color = "blue";
  //         } else {
  //           color = "red";
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </span>
  //   )
  // },
  {
    title: "First Name",
    dataIndex: "firstname",
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: "Last Name",
    dataIndex: "lastname"
  },
  {
    title: "E mail",
    dataIndex: "email"
  }
];
export default class Admin extends Component {
  constructor() {
    super();

    this.state = {
      visibleDrawer: false,
      visible: false,
      selectedItems: [],
      selectedRows: [],
      transferType: "debitcard",
      user: {},
      users: [],
      selectedUsers: [{ firstname: "bilbo", lastname: "baggins" }],
      firstname: "",
      lastname: "",
      memberId: "",
      loading: false
    };
    this.onSelectChange = this.onSelectChange.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(event) {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
    });
  }

  onSelectChange = (selectedRowKeys, selectedRows) => {
    console.log(selectedRows);
    this.setState({ selectedRows });
    this.state.selectedUsers.push(selectedRows);
  };

  handleConnection = event => {
    console.log("handling-connection");
    axios
      .post(
        `https://api.solidnumber.com/api/v1/member/connect/${
          this.state.memberId
        }`
      )
      .then(res => {
        console.log(res.status);
        if (res.status === 200) {
          console.log(res);
          this.onClose();
        } else {
          message.error(res);
        }
      });
    event.preventDefault();
  };

  handlePushFunds = event => {
    console.log("handling-push-funds");
    axios
      .post(
        `https://api.solidnumber.com/api/v1/admin/transferfunds/${
          this.state.memberId
        }/${this.state.transferType}?amount=${this.state.amount}`,
        {}
      )
      .then(res => {
        console.log(res.status);
        if (res.status === 200) {
          console.log(res);
          this.onClose();
        } else {
          message.error(res);
        }
      });
    event.preventDefault();
  };

  handleGetUsers = () => {
    console.log("handling-users");
    axios
      .get("https://api.solidnumber.com/api/v1/admin/member/list", {
        headers: { SOLIDAUTHKEY: localStorage.getItem("SOLID_AUTH_KEY") }
      })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          this.setState({ users: res.data });
          console.log(res);
        } else {
          message.error(res);
        }
      });
    event.preventDefault();
  };

  componentDidMount() {
    this.handleGetUsers();
  }

  // ui events

  showDrawer = () => {
    this.setState({
      visibleDrawer: true
    });
  };
  onClose = () => {
    this.setState({
      visibleDrawer: false
    });
  };

  handleChange = selectedItems => {
    this.setState({ selectedItems });
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    // const { selectedItems, visible, loading, selectedRows } = this.state;
    const filteredOptions = OPTIONS.filter(
      o => !this.state.selectedItems.includes(o)
    );

    const rowSelection = {
      selectedRows: this.state.selectedRows,
      onChange: this.onSelectChange
    };
    // const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <div className="table-controls-wrapper">
          <Modal
            wrapClassName="modal-wrapper"
            title="Push to Card Holders"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                Return
              </Button>,
              <Button
                key="submit"
                type="primary"
                loading={this.loading}
                onClick={this.handleOk}
              >
                Push to Card
              </Button>
            ]}
          >
            <div className="">
              <label>Choose an Account to push Funds</label>
              <List
                size="small"
                header={<div>Selected Users</div>}
                bordered
                dataSource={this.state.selectedUsers}
                renderItem={item => (
                  <List.Item>
                    <a>
                      {item.firstname} {item.lastname}
                    </a>{" "}
                  </List.Item>
                )}
              />
            </div>
            <div className="">
              <label>Enter an amount of funds to push</label>
              <Input placeholder="$500.00" />
            </div>
            <div className="">
              <label>Write a note</label>
              <TextArea rows={4} onChange={onChange} />
            </div>
          </Modal>
          <h2>Cardholders</h2>
          <div>
            <Button
              onClick={this.showModal}
              style={{ marginRight: "15px" }}
              type="primary"
            >
              Create Payout
            </Button>
            <Button
              type="primary"
              onClick={this.showDrawer}
              style={{ marginRight: "15px" }}
            >
              <Icon type="plus" /> Connect Accounts
            </Button>
            <Select
              mode="multiple"
              placeholder="Sort Table"
              value={this.state.selectedItems}
              onChange={this.handleChange}
              style={{ width: "150px" }}
            >
              {filteredOptions.map(item => (
                <Select.Option key={item} value={item}>
                  {item}
                </Select.Option>
              ))}
            </Select>
          </div>
        </div>
        <Table
          scroll={{ x: 800, y: 300 }}
          style={{ maxWidth: "800px" }}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.state.users}
        />
        <Drawer
          title="Create a new account"
          width={720}
          onClose={this.onClose}
          visible={this.state.visibleDrawer}
        >
          <Tabs defaultActiveKey="1">
            <TabPane tab="Connect One User" key="1">
              <div>
                <div className="settings-wrapper">
                  <label>First Name (required)</label>
                  <Input
                    type="text"
                    placeholder="John"
                    name="fName"
                    onChange={this.handleFormChange}
                  />
                </div>
                <div className="settings-wrapper">
                  <label>Last Name</label>
                  <Input
                    type="text"
                    name="lName"
                    placeholder="Smith"
                    onChange={this.handleFormChange}
                  />
                </div>
                <div className="settings-wrapper">
                  <label>Member ID</label>
                  <Input
                    type="text"
                    name="memberId"
                    placeholder="A member Id"
                    onChange={this.handleFormChange}
                  />
                </div>
                <div className="settings-wrapper">
                  <label>Email</label>
                  <Input
                    type="text"
                    name="email"
                    placeholder="info@solidnumber.com"
                    onChange={this.handleFormChange}
                  />
                </div>
                <div className="settings-wrapper">
                  <label>Phone Number</label>
                  <Input
                    type="text"
                    name="phoneNumber"
                    placeholder="801-344-3434"
                    onChange={this.handleFormChange}
                  />
                </div>

                <div
                  style={{
                    width: "100%",
                    borderTop: "1px solid #e9e9e9",
                    marginTop: "10px",
                    padding: "10px 16px",
                    background: "#fff",
                    textAlign: "right"
                  }}
                >
                  <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                    Cancel
                  </Button>
                  <Button onClick={this.handleConnection} type="primary">
                    Submit
                  </Button>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Bulk Upload" key="2">
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  To Bulk upload users, drag and drop a csv file with these
                  comma seperated values. Name, MemberID, Etc.
                </p>
              </Dragger>
            </TabPane>
          </Tabs>
        </Drawer>
      </div>
    );
  }
}
