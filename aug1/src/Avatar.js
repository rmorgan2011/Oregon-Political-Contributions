import React from 'react';




function Avatar(props){
  return <div style={{
    color: `${props.foregroundColor}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    width: '50px',
    borderRadius: '25px',
    //template literals
    background: `${props.backgroundColor}`
  }}>
    {props.children}
  </div>
}

export default Avatar;
