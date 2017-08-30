import React from 'react';
import DataList from './DataList'

class DataViewer extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
    <div>
      <h1 style={{color: '#337ab7', marginLeft: '20px', marginBotton: '0'}}>Oregon Political Contributions</h1>
      <DataList/>
    </div>
  )

  }
}

export default DataViewer;
