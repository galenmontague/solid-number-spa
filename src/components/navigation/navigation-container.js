import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import { Icon, Layout, Menu } from "antd";
const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import logo from "../../../static/assets/solidnumber.png";

const NavigationComponent = props => {
  return (
    <Header
      style={{
        marginBottom: "25px",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        borderBottom: "solid 1px #E4E7EB"
      }}
    >
      <Menu
        selectable={false}
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px", textAlign: "left", border: "none" }}
      >
        <Menu.Item style={{ borderBottom: "none" }}>
          <img src={logo} height={25} />
        </Menu.Item>
      </Menu>
      <Menu
        theme="light"
        mode="horizontal"
        style={{ lineHeight: "64px", textAlign: "right", border: "none" }}
      >
        <SubMenu key="sub1" title="Settings" style={{ border: "none" }}>
          <MenuItemGroup>
            <Menu.Item key="1">Profile</Menu.Item>
            <Menu.Item key="2">Logout</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    </Header>
  );
};

export default withRouter(NavigationComponent);
