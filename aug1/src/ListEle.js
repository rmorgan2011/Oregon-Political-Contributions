import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function ListEle(props){
  var newList = '';
  if(props.ele.length > 0){
    newList = props.ele.map(element => <li className='list-group-item' key={element.contributor_payee}>{element.contributor_payee}: ${element.sum}</li>);
  }
  return(
    <div style={{margin: '15px', border: '2px solid black', padding: '10px', borderRadius: '10px', overflow: 'auto', backgroundColor: '#FFF'}}>
    <form style = {{width: 'auto'}} onSubmit={props.methodRef}>
      <h3 style={{marginBotton: '15px'}}>{props.title}</h3>
      <input placeholder="Enter Number of Entries (Default 10)"  className='form-control' onChange={(e) => props.updateNum(e,props.title)} type='number' inputMode='numeric'/>
      <div style={{width: '100%'}} className='btn-group'>
        <a className='btn btn-primary' style={{width: '33.33%'}}onClick={(e) => props.sortAscend(e,props.title)}> ascending </a>
        <a className='btn btn-primary' style={{width: '33.33%'}}onClick={(e) => props.sortDescend(e,props.title)}> decending </a>
        <a className='btn btn-primary' style={{width: '33.33%'}}onClick={(e) => props.sortAlpha(e,props.title)}> alphabetical </a>
      </div>
      <div style={{height: '275', width: 'auto', overflowY: 'scroll'}}>
        <ul className='list-group'>{newList}</ul>
      </div>
    </form>
  </div>
  )
}




export default ListEle;
