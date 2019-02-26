import React, { Component } from 'react';
import Table from '../tables/table.js';
import TabNavigation from '../navigation/tab-navigation.js';
import Select from 'react-select';

const options = [
  { value: 'active', label: 'Active Users' },
  { value: 'inActive', label: 'In-Active Users' },
  { value: 'sales', label: 'Sales' },
  { value: 'csr', label: 'Csr' },
  { value: 'accounting', label: 'Accounting' }
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}



export default class Dashboard extends Component {
  constructor () {
    super();
    this.state = {
      selectedOption: null,
    }
  }
  
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  
  render () {
    const { selectedOption } = this.state;

    return (
      <div className='dashbord-wrapper'> 
        <TabNavigation/>
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
          isMulti={true}    
          // theme={(theme) => ({
          //   ...theme,
          //   colors: {
          //   ...theme.colors,
          //     primary25: '#E4E7EB',
          //     primary: '#4B74FF',
          //   },
          // })}
           />
        </div>
        </div>
        <Table/>
      </div>
    )
  }
}