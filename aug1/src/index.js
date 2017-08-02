import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DataViewer from './DataViewer'
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(<DataViewer />, document.getElementById('root'));
registerServiceWorker();
