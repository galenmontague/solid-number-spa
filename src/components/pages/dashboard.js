import React, { Component } from 'react';

import Table from '../tables/table.js';
// import TabNavigation from '../navigation/tab-navigation.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';

export default class Dashboard extends Component {
  constructor () {
    super();
    this.state = {
      selectedOption: null,
      tabs: [
        { name: 'Employees' },
        { name: 'Transactions' },
        { name: 'Payouts' }
      ]
    }
    this.handleTabChange = this.handleTabChange.bind(this);
  }
  

  
  handleTabChange = (tab) => {
    
  }
  
  render () {
    const { selectedOption } = this.state;

    return (
      <Tabs>
        <div className='dashbord-wrapper'> 
          <TabList>
            <Tab>Employess</Tab>
            <Tab>Vendors</Tab>
            <Tab>Transantions</Tab>
          </TabList>
           
            <TabPanel>
              <Table tableName="Employee"/>
            </TabPanel>
            <TabPanel>
              <Table tableName="Vendors"/>
            </TabPanel>
            <TabPanel>
              <Table tableName="Transactions"/>
            </TabPanel>
          </div>
        </Tabs>
    )
  }
}