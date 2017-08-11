import React from 'react';
import ListEle from './ListEle'

class DataList extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      busState: {
        busData: [],
        busNum: 5
      },
      indState: {
        indData: [],
        indNum: 5
      }
    };
    this.performFetch = this.performFetch.bind(this);
    this.update = this.update.bind(this);
    this.updateNum = this.updateNum.bind(this);
    this.sortAscend = this.sortAscend.bind(this);
    this.sortDescend = this.sortDescend.bind(this);
    this.sortAlpha = this.sortAlpha.bind(this);
  }

  sortAlpha(e,title){
    e.preventDefault();
    if(title==="Individual Contributions"){
      this.setState({indState: {indData: this.state.indState.indData.sort(function(a,b){
        var aUpper = a.contributor_payee.toUpperCase();
        var bUpper = b.contributor_payee.toUpperCase();
        if (aUpper < bUpper) {
          return -1;
        }
        if (aUpper > bUpper) {
          return 1;
        }
        return 0;
      }), indNum: this.state.indState.indNum}});
    }
    else{

      this.setState({busState: {busData: this.state.busState.busData.sort(function(a,b){
        var aUpper = a.contributor_payee.toUpperCase();
        var bUpper = b.contributor_payee.toUpperCase();
        if (aUpper < bUpper) {
          return -1;
        }
        if (aUpper > bUpper) {
          return 1;
        }
        return 0;
      }), busNum: this.state.busState.busNum}});
    }
  }

  sortAscend(e,title){
    e.preventDefault();
    if(title==="Individual Contributions"){

      this.setState({indState: {indData: this.state.indState.indData.sort(function(a,b){
        return a.sum - b.sum;
      }), indNum: this.state.indState.indNum}});
    }
    else{

      this.setState({busState: {busData: this.state.busState.busData.sort(function(a,b){
        return a.sum - b.sum;
      }), busNum: this.state.busState.busNum}});
    }
  }

  sortDescend(e,title){
    e.preventDefault();
    if(title==="Individual Contributions"){
      this.setState({indState: {indData: this.state.indState.indData.sort(function(a,b){
        return b.sum - a.sum;
      }), indNum: this.state.indState.indNum}});
    }
    else{
      this.setState({busState: {busData: this.state.busState.busData.sort(function(a,b){
        return b.sum - a.sum;
      }), busNum: this.state.busState.busNum}});
    }
  }

  updateNum(e,title){
    e.preventDefault();
    if(title==="Individual Contributions"){
      this.setState({indState: {indData: this.state.indState.indData, indNum: e.target.value}});
    }
    else{
      this.setState({busState: {busData: this.state.busState.busData, busNum: e.target.value}});
    }
  }

  update(e){
    e.preventDefault();
    this.performFetch();
  }

  performFetch(){
    const appContext = this;
    fetch('http://54.213.83.132/hackoregon/http/oregon_individual_contributors/' + this.state.indState.indNum.toString() + '/').then(
                      function(response){
                        return response.json();
                      })
                      .then(function(data) {
                        appContext.setState({ indState: { indData: data, indNum: appContext.state.indState.indNum } })
                      })

    fetch('http://54.213.83.132/hackoregon/http/oregon_business_contributors/' + this.state.busState.busNum.toString() + '/').then(
                      function(response){
                        return response.json();
                      })
                      .then(function(data){
                        appContext.setState({ busState: { busData: data, busNum: appContext.state.busState.busNum } })
                      })
  }

  componentDidMount(){
    this.performFetch();
  }

  render(){
    const sortAlpha=this.sortAlpha;
    const sortAscend=this.sortAscend;
    const sortDescend=this.sortDescend;
    const updateNum=this.updateNum;
    const methodRef=this.update;
    const indData =this.state.indState.indData;
    const busData = this.state.busState.busData;
    return (
            <div style={{display: 'flex'}}>
              <ListEle ele={indData} title="Individual Contributions" methodRef={methodRef} updateNum={updateNum} sortDescend={sortDescend} sortAscend={sortAscend} sortAlpha={sortAlpha}/>
    
              <ListEle ele={busData} title="Business Contributions" methodRef={methodRef} updateNum={updateNum} sortDescend={sortDescend} sortAscend={sortAscend} sortAlpha={sortAlpha}/>
            </div>
          )


  }
}

export default DataList;
