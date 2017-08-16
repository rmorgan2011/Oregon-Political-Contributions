import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function ListEle(props){
  var newList = '';
  if(props.ele.length > 0){
    newList = props.ele.map(element => <li className='list-group-item' key={element.contributor_payee}>{element.contributor_payee}: ${element.sum}</li>);
  }
  return(
    <div style={{borderStyle: 'solid', borderWidth: '1px', margin: '10px', padding: '15px'}}>
    <form  onSubmit={(e) => props.methodRef(e)}>

      <h3 style={{margin: '10px'}}>{props.title}</h3>
      <input className='form-control' onChange={(e) => props.updateNum(e,props.title)} type='number' inputMode='numeric'/>
      <div display='flex'>
        <div className='btn-group'>
        <a style={{margin: '2px'}} onClick={(e) => props.sortAscend(e,props.title)}> ascending </a>
        <a style={{margin: '2px'}} onClick={(e) => props.sortDescend(e,props.title)}> decending </a>
        <a style={{margin: '2px'}} onClick={(e) => props.sortAlpha(e,props.title)}> alphabetical </a>
        </div>
      <ul className='list-group'>{newList}</ul>
      </div>
    </form>
  </div>
  )
}




export default ListEle;
