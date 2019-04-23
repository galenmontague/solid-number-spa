import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
// icons
import { Icon } from "antd";

const SideNavigationComponent = props => {
  return (
    <div className="side-nav-wrapper">
      <div className="nav-link-wrapper-header" />
      <div className="nav-link-wrapper">
        <NavLink to="/dash" activeClassName="nav-link-active">
          <Icon type="dashboard" theme="twoTone" />
          <span>Dashboard</span>
        </NavLink>
      </div>
      <div className="nav-link-wrapper">
        <NavLink to="/banking" activeClassName="nav-link-active">
          <Icon type="bank" theme="twoTone" />
          <span>Banking</span>
        </NavLink>
      </div>
      <div className="nav-link-wrapper">
        <NavLink to="/payments" activeClassName="nav-link-active">
          <Icon type="wallet" theme="twoTone" />
          <span>Transactions</span>
        </NavLink>
      </div>
      <div className="nav-link-wrapper">
        <NavLink to="/admin" activeClassName="nav-link-active">
          <Icon type="contacts" theme="twoTone" />
          <span>Users</span>
        </NavLink>
      </div>
      <div className="nav-link-wrapper">
        <NavLink to="/settings" activeClassName="nav-link-active">
          <Icon type="setting" theme="twoTone" />
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default withRouter(SideNavigationComponent);
