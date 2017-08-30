import React from 'react';

function ContactCard(props){
  return(
    <div style={{border: '2px solid black', padding: '10px', margin: '15px', backgroundColor: 'lightgrey', display: 'inline-block'}}>
      <div style={{display: 'flex'}}>
        <h1>{props.name}</h1>
        <div style={{margin: '10px'}}/>
        <img style={{height: '70px', width: '70px', display: 'flex', alignItems: 'center'}}src={props.picture}/>
      </div>
      <h2>E-mail: {props.email}</h2>
      <h2>Phone: {props.phone}</h2>
      <h2>Address: {props.address}</h2>
    </div>
  )
}

export default ContactCard;
