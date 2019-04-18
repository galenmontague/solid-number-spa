import React, { Component } from "react";
import { Card } from "antd";
import Axios from "axios";

const cardStyle = {
  width: "150px",
  textAlign: "center"
};

export default class IntegrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      integrations: []
    };
    // BINDINGS
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
    });
  }

  handleSubmit(event) {}

  render() {
    return (
      <div className="form-int-wrapper">
        <div className="integration" />
        <div className="hr-sect">OR</div>
        <div className="new-integration">
          <label hmtlFor="newint">Create A New Payment Integration</label>
          <input id="newint" type="text" />
        </div>
      </div>
    );
  }
}
