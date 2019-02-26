import React from 'react';
import { withRouter } from 'react-router'
import { NavLink} from 'react-router-dom'
// icons
import bank from '../../../static/assets/bank.svg'
import card from '../../../static/assets/new.svg'
import menu from '../../../static/assets/menu.svg'
import sales from '../../../static/assets/sales.svg'
import pay from '../../../static/assets/online-pay.svg'
import gear from '../../../static/assets/gear.svg'
import team from '../../../static/assets/team.svg'


const SideNavigationComponent = props => {
  return (
    <div className="side-nav-wrapper">
      <div className="nav-link-wrapper-header">
      </div>
      <div className="nav-link-wrapper">
      <NavLink to='/dashboard' activeClassName='nav-link-active'><img src={card} height="20"/> Dashboard </NavLink>
      </div>
      <div className="nav-link-wrapper">
      
      <NavLink to='/banking' activeClassName='nav-link-active'><img src={bank} height="20"/> Banking </NavLink>
      </div>
      <div className="nav-link-wrapper">
      
      <NavLink to='/payments' activeClassName='nav-link-active'><img src={pay} height="20"/> Payments </NavLink>
      </div>
      <div className="nav-link-wrapper">
      
      <NavLink to='/reporting' activeClassName='nav-link-active'><img src={sales} height="20"/> Reporting </NavLink>
      </div>
      <div className="nav-link-wrapper">
      
      <NavLink to='/admin' activeClassName='nav-link-active'><img src={team} height="20"/> Admin </NavLink>
      </div>
      <div className="nav-link-wrapper">
      
      <NavLink to='/settings' activeClassName='nav-link-active'><img src={gear} height="20"/> Settings </NavLink>
      </div>
    </div>
  )
}

export default withRouter(SideNavigationComponent);