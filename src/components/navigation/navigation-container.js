import React from 'react';
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import logo from '../../../static/assets/solidnumber.png'

const NavigationComponent = props => {
  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <img src={ logo } height='25'/>
      </div>
      <div className="right-side">
        <div className="nav-link-wrapper">
          <NavLink to='/dashboard' activeClassName='nav-link-active'> Dashboard</NavLink>
        </div>
        <div className="nav-link-wrapper">
          <NavLink to='/settings' activeClassName='nav-link-active'> Settings</NavLink>
        </div>
      </div>
    </div>
  )
}

export default withRouter(NavigationComponent);