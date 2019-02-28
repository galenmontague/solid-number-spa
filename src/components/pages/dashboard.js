import React, { Component } from 'react';

import Table from '../tables/table.js';
// import TabNavigation from '../navigation/tab-navigation.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Select from 'react-select';


import 'react-tabs/style/react-tabs.scss';


const options = [
  { value: 'active', label: 'Active Users' },
  { value: 'inActive', label: 'In-Active Users' },
  { value: 'sales', label: 'Sales' },
  { value: 'csr', label: 'Csr' },
  { value: 'accounting', label: 'Accounting' }
];


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
  
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
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
            <div className="table-actions">
              <div>
                <h1>Employee</h1>
              </div>
              <div className="select-wrapper">
                <Select 
                  value={selectedOption} 
                  onChange={this.handleChange}
                  placeholder="Filter"
                  options={options}
                  isMulti={true}/>
              </div>
            </div>
            <TabPanel>
              <Table/>
            </TabPanel>
            <TabPanel>
              <Table/>
            </TabPanel>
            <TabPanel>
              <Table/>
            </TabPanel>
          </div>
        </Tabs>
    )
  }
}