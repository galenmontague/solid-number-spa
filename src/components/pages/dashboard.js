import React, { Component } from "react";
import { Card, Button, Icon, Alert } from "antd";
import { Statistic, Row, Col } from "antd";

// import { Tabs } from 'antd';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Card style={{ textAlign: "center", width: "100%" }}>
          <Row gutter={16}>
            <Col span={12} style={{ textAlign: "center" }}>
              <Statistic title="Account Balance" value={"$0.00"} />
            </Col>
            <Col span={12} style={{ textAlign: "center" }}>
              <Statistic
                title="Reserve Balance (USD)"
                value={"$0.00"}
                precision={2}
              />
            </Col>
          </Row>
        </Card>

        <div className="dashboard-wrapper-x" style={{ marginTop: "20px" }}>
          <Card style={{ textAlign: "center", width: "100%" }}>
            <Icon
              type="user"
              style={{ fontSize: "50px", marginBottom: "15px" }}
            />
            <Button type="primary"> Manage Users</Button>
          </Card>
          <Card style={{ textAlign: "center", width: "100%" }}>
            <Icon
              type="dollar"
              style={{ fontSize: "50px", marginBottom: "15px" }}
            />
            <Button
              type="primary"
              style={{
                backgroundColor: "#7953f5",
                color: "white",
                borderColor: "#7953f5"
              }}
            >
              Create a Payout
            </Button>
          </Card>
          <Card style={{ textAlign: "center", width: "100%" }}>
            <Icon
              type="bank"
              style={{ fontSize: "50px", marginBottom: "15px" }}
            />
            <Button
              type="primary"
              style={{
                backgroundColor: "#F6A623",
                color: "white",
                borderColor: "#F6A623"
              }}
            >
              Go to Banking
            </Button>
          </Card>
        </div>
      </div>
    );
  }
}
