import React from 'react';


function ListEle(props){
  var newList = '';
  if(props.ele.length > 0){
    newList = props.ele.map(element => <li key={element.contributor_payee}>{element.contributor_payee}: ${element.sum}</li>);
  }
  return(
    <form onSubmit={(e) => props.methodRef(e)}>
      <h4>{props.title}</h4>
      <input onChange={(e) => props.updateNum(e,props.title)} type='number' inputMode='numeric'/>
      <div display='flex'>
        <a style={{padding: 10}} onClick={(e) => props.sortAscend(e,props.title)}> ascending </a>
        <a onClick={(e) => props.sortDescend(e,props.title)}> decending </a>
      </div>
      <ol>{newList}</ol>
    </form>
  )
}




export default ListEle;
