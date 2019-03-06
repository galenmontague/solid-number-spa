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
      tabs: [
        { name: 'Employees' },
        { name: 'Transactions' },
        { name: 'Payouts' }
      ]
    }
  }
  
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
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
            <td>9948124321</td>
            <td>Active</td> 
            <td><a>Greg Wicken</a></td> 
            <td>Hr</td> 
            <td>Monthly</td> 
            <td>$ 3,300</td> 
            <td>$ 2,000</td> 
            <td>$ 500</td> 
            <td> <img src={dots} height='23'></img></td>
          </tr>
          <tr className='table-row'>
            <td><div className="check-box"><input id="i3" type="checkbox"/><label htmlFor="i3"></label></div></td>
            <td>9948124321</td>
            <td>Active</td> 
            <td><a>Greg Fitzsimmons</a></td> 
            <td>Hr</td> 
            <td>Monthly</td> 
            <td>$ 3,300</td> 
            <td>$ 2,000</td> 
            <td>$ 500</td> 
            <td> <img src={dots} height='23'></img></td>
          </tr>
          <tr className='table-row'>
            <td><div className="check-box"><input id="i4" type="checkbox"/><label htmlFor="i4"></label></div></td>
            <td>9948124321</td>
            <td>Active</td> 
            <td><a>Maggie Wicken</a></td> 
            <td>Hr</td> 
            <td>Monthly</td> 
            <td>$ 3,300</td> 
            <td>$ 2,000</td> 
            <td>$ 500</td> 
            <td> <img src={dots} height='23'></img></td>
          </tr>
          <tr className='table-row'>
            <td><div className="check-box"><input id="i5" type="checkbox"/><label htmlFor="i5"></label></div></td>
            <td>9948124321</td>
            <td>Active</td> 
            <td><a>Lucian Maxon</a></td> 
            <td>Hr</td> 
            <td>Monthly</td> 
            <td>$ 3,300</td> 
            <td>$ 2,000</td> 
            <td>$ 500</td> 
            <td> <img src={dots} height='23'></img></td>
          </tr>
          <tr className='table-row'>
            <td><div className="check-box"><input id="i7" type="checkbox"/><label htmlFor="i7"></label></div></td>
            <td>9948124321</td>
            <td>Active</td> 
            <td><a>Travis Scott</a></td> 
            <td>Hr</td> 
            <td>Monthly</td> 
            <td>$ 3,300</td> 
            <td>$ 2,000</td> 
            <td>$ 500</td> 
            <td> <img src={dots} height='23'></img></td>
          </tr>
          <tr className='table-row'>
            <td><div className="check-box"><input id="i8" type="checkbox"/><label htmlFor="i8"></label></div></td>
            <td>9948124321</td>
            <td>Active</td> 
            <td><a>Mark Andreesen</a></td> 
            <td>Hr</td> 
            <td>Monthly</td> 
            <td>$ 3,300</td> 
            <td>$ 2,000</td> 
            <td>$ 500</td> 
            <td> <img src={dots} height='23'></img></td>
          </tr>
          <tr className='table-row'>
            <td><div className="check-box"><input id="i10" type="checkbox"/><label htmlFor="i10"></label></div></td>
            <td>9948124321</td>
            <td>Active</td> 
            <td><a>Will Brucker</a></td> 
            <td>Hr</td> 
            <td>Monthly</td> 
            <td>$ 3,300</td> 
            <td>$ 2,000</td> 
            <td>$ 500</td> 
            <td> <img src={dots} height='23'></img></td>
          </tr>
          <tr className='table-row'>
            <td><div className="check-box"><input id="i9" type="checkbox"/><label htmlFor="i9"></label></div></td>
            <td>9948124321</td>
            <td>Active</td> 
            <td><a>Max Halloway</a></td> 
            <td>Hr</td> 
            <td>Monthly</td> 
            <td>$ 3,300</td> 
            <td>$ 2,000</td> 
            <td>$ 500</td> 
            <td> <img src={dots} height='23'></img></td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

