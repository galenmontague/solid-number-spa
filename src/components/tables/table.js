import React, { Component } from 'react';
import Select from 'react-select';
import dots from '../../../static/assets/dots.svg'

const options = [
  { value: 'active', label: 'Active Users' },
  { value: 'inActive', label: 'In-Active Users' },
  { value: 'sales', label: 'Sales' },
  { value: 'csr', label: 'Csr' },
  { value: 'accounting', label: 'Accounting' }
];


export default class Table extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      selectedOption: null,
    }
  }
  
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  
  tableRows (props) {
    return this.props.tableData
  }
  
  render() {
    const { selectedOption } = this.state;

    return (
      <div className="base-table-wrapper">
        <div className="table-actions">
            <div>
              <h1>{this.props.tableName}</h1>
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
        <table className="table">
          <thead className='table-head'>
          <tr className='table-row'>  
            <th><div className="check-box"><input id="i1" type="checkbox"/><label htmlFor="i1"></label></div></th>
            <th>Acct ID</th> 
            <th>Status</th>
            <th>Dept</th>
            <th>Employee</th>
            <th>Pay Perid</th>
            <th>Net Pay</th>
            <th>Limit</th>
            <th>Per</th>
            <th>Edit</th>
          </tr>
          </thead>
          <tbody>
          <tr className='table-row'>
            <td><div className="check-box"><input id="i2" type="checkbox"/><label htmlFor="i2"></label></div></td>
              {this.tableRows()}
            <td> <img src={dots} height='23'></img></td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

