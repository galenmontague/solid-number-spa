import React from 'react';

const TabNavigation = props => {
  
  const renderTabs = props.tabs.map(tab => {
    return (
      <li className=""><a>{ tab.name }</a></li>
      )
    })

  
  return (
    <div className="tab-navigation-wrapper">
      <div className="tab-navigation-items">
        <ul>
          { renderTabs }
        </ul>
      </div>
    </div>
  )
}

export default TabNavigation;