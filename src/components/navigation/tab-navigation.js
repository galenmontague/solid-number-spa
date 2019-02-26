import React from 'react';

const TabNavigation = props => {
  return (
    <div className="tab-navigation-wrapper">
      <div className="tab-navigation-items">
        <ul>
          <li className="active">
          <a>Employees</a>
          </li>
          <li>
          <a>Vendors</a>
          </li>
          <li>
          <a>Transactions</a> 
          </li>
          <li>
          <a>Payout</a>  
          </li>
          <li>
          <a>Enrollment</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TabNavigation;