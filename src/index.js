import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


import Routes from './routes';

import './index.css';

ReactDOM.render(
 <Routes history={browserHistory} />,
 document.getElementById('root')
);






// Render the ServiceChooser component, and pass the array of services

