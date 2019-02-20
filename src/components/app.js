import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationContainer from './navigation/navigation-container.js';
import SideNavigationContainer from './navigation/side-navigation-container.js';
// pages
import Dashboard from './pages/dashboard.js';
import Banking from './pages/banking.js';
import Payments from './pages/payments.js';
import Admin from './pages/admin.js';
import Reports from './pages/reporting.js';
import Settings from './pages/settings.js';
import NoMatch from './pages/no-match.js';



export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
        <div>
        <NavigationContainer/>
        <div className='app-body-wrapper'>
          <div className='app-content-wrapper'>
            <SideNavigationContainer/>
              <div className="app-content">
                <Switch>
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route  path="/banking" component={Banking} />
                  <Route  path="/payments" component={Payments} />
                  <Route  path="/admin" component={Admin} />
                  <Route  path="/reporting" component={Reports} />
                  <Route  path="/settings" component={Settings} />
                  <Route component={NoMatch} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
      </div>
    );
  }
}
