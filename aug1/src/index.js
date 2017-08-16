import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DataViewer from './DataViewer'
import registerServiceWorker from './registerServiceWorker';
import StyledComponents from './StyledComponents'
// import Avatar from './Avatar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// function InitialAvatar(props){
//   return(
//     <div>
//       <Avatar foregroundColor='white' backgroundColor='red'>
//         <div>Q</div>
//
//       </Avatar>
//       <Avatar foregroundColor='black 'backgroundColor='lightgrey'>
//         D
//       </Avatar>
//
//     </div>
//
//   )
// }

ReactDOM.render(<StyledComponents/>, document.getElementById('root'));
registerServiceWorker();
