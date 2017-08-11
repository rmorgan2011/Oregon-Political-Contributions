import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function ListEle(props){
  var newList = '';
  if(props.ele.length > 0){
    newList = props.ele.map(element => <li style={{marginLeft: '5px', marginRight: '5px'}} key={element.contributor_payee}>{element.contributor_payee}: ${element.sum}</li>);
  }
  return(
    <div style={{borderStyle: 'solid', borderWidth: '1px', margin: '10px'}}>
    <form  onSubmit={(e) => props.methodRef(e)}>

      <h4 style={{marginLeft: '2px'}}>{props.title}</h4>
      <input style={{width: 'auto', marginLeft: '3px'}} onChange={(e) => props.updateNum(e,props.title)} type='number' inputMode='numeric'/>
      <div display='flex'>
        <a style={{margin: '2px'}} onClick={(e) => props.sortAscend(e,props.title)}> ascending </a>
        <a style={{margin: '2px'}} onClick={(e) => props.sortDescend(e,props.title)}> decending </a>
        <a style={{margin: '2px'}} onClick={(e) => props.sortAlpha(e,props.title)}> alphabetical </a>
      <ol>{newList}</ol>
      </div>
    </form>
  </div>
  )
}




export default ListEle;
