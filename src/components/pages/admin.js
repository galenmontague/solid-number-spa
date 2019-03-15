import React, { Component } from 'react';
import Table from '../tables/table.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CSVReader from 'react-csv-reader'
import Papa from 'papaparse'

import 'react-tabs/style/react-tabs.scss';
import dots from '../../../static/assets/dots.svg'



export default class Admin extends Component {
  constructor(){
    super();
    
    this.state = {
      tableData: [],
    }
    
    this.handleCsvUpload = this.handleCsvUpload.bind(this);
    this.handleCsvUploadError = this.handleCsvUploadError.bind(this);
  }
  
    handleCsvUpload (csv) {
      
      Papa.parse(csv, {
        complete: function(results) {
          console.log(results);
        }
      });
      // var results = Papa.parse(csv);
      // console.log(results)

      }
  
  handleCsvUploadError (err) {
    console.log('handleCsvUploadError::', err)
  }
  
  render( ){
    return (
      <Tabs>
      <div className='admin-wrapper'> 
      <div className="tab-action-wrapper">
        <TabList>
          <Tab>Users</Tab>
        </TabList>
        <div className="upload-button">
        <CSVReader
          cssClass="csv-reader-input"
          onFileLoaded={this.handleCsvUpload}
          onError={this.handleCsvUploadError}
          inputId="csv-file-upload-users"
          label="Upload User Csv"
        />
        </div>
      </div>
          <TabPanel>
            <Table tableName="Users" tableData={this.tableData}/>
          </TabPanel>
        </div>
      </Tabs>
    )
  }
}