import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

// layouts
// import LoginContainer from 'auth/login-container.js'
import NavigationContainer from "./navigation/navigation-container.js";
import SideNavigationContainer from "./navigation/side-navigation-container.js";

// Http
import axios from "axios";

// pages
import Dashboard from "./pages/dashboard.js";
import Banking from "./pages/banking.js";
import Payments from "./pages/payments.js";
import Admin from "./pages/admin.js";
import Auth from "./pages/auth.js";
import Register from "./pages/registration.js";
import Reports from "./pages/reporting.js";
import Settings from "./pages/settings.js";
import NoMatch from "./pages/no-match.js";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }

  handleSuccessfulLogin() {
    console.log("here");
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  checkLoginStatus() {
    return axios
      .get("https://api.solidnumber.com/api/v1/member/get/", {
        params: {
          _key: localStorage.getItem("SOLID_AUTH_KEY")
        }
      })
      .then(res => {
        console.log(res);
        if (res.status === 200) this.setState({ loggedInStatus: "LOGGED_IN" });
        // if (loggedIn && loggedInStatus === "LOGGED_IN") {
        //   return loggedIn;
        // } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
        //   this.setState({ loggedInStatus: "LOGGED_IN" });
        // } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
        //   this.setState({ loggedInStatus: "NOT_LOGGED_IN" });
        // }
      })
      .catch(err => {
        console.log(`ERROR:: ${err}`);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  authorizedPages() {
    return [
      <Route key="dashboard" path="/dash" component={Dashboard} />,
      <Route key="banking" path="/banking" component={Banking} />,
      <Route key="payments" path="/payments" component={Payments} />,
      <Route key="admin" path="/admin" component={Admin} />,
      <Route key="reporting" path="/reporting" component={Reports} />,
      <Route key="settings" path="/settings" component={Settings} />,
      <Route key="no-match" component={NoMatch} />
    ];
  }

  unAuthorizedPages() {
    return [
      <Route
        key="auth"
        path="/auth"
        render={props => (
          <Auth
            {...props}
            handleSuccessfulLogin={this.handleUnsuccessfulLogin}
            handleUnsuccessfulLogin={this.handleSuccessfulLogin}
          />
        )}
      />,
      <Route exact key="register" path="/register" component={Register} />
    ];
  }

  render() {
    return (
      <div className="container">
        {this.state.loggedInStatus === "LOGGED_IN" ? (
          <Router>
            <div>
              <NavigationContainer logout={this.handleSuccessfulLogout} />
              <div className="app-body-wrapper">
                <div className="app-content-wrapper">
                  <SideNavigationContainer />
                  <div className="app-content">
                    <Switch>{this.authorizedPages()}</Switch>
                  </div>
                </div>
              </div>
            </div>
          </Router>
        ) : (
          <Router>
            <div>
              <Switch>{this.unAuthorizedPages()}</Switch>
            </div>
          </Router>
        )}
      </div>
    );
  }
}
