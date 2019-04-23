import React, { Component } from "react";
import axios from "axios";
import logo from "../../../static/assets/solidnumber.png";

import { Form, Icon, Input, Button, message } from "antd";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentYear: new Date().getFullYear(),
      email: "",
      password: ""
    };
    // BINDINGS
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
    });
  }

  handleSubmit(event) {
    console.log("asdf");
    axios
      .post("https://api.solidnumber.com/api/v1/member/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        console.log(res.status);
        if (res.status === 200) {
          localStorage.setItem("SOLID_AUTH_KEY", res.data.key);
          this.props.handleSuccessfulAuth();
        } else {
          this.props.handleUnsuccessfulAuth();
          message.error(`Wrong Email or Password`);
        }
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="login-form">
          <div className="image-wrapper">
            <img src={logo} height="50" />
          </div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                type="email"
                name="email"
                placeholder="Your email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                type="password"
                name="password"
                placeholder="Your password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Button
                block
                htmlType="submit"
                type="primary"
                shape="round"
                size="large"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="copy-wrapper">
          Click <a href=""> here</a> to register &copy; {this.state.currentYear}{" "}
          <a href="https://solidnumber.com">SolidNumber </a>
        </div>
      </div>
    );
  }
}
