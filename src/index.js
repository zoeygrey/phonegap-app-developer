import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { hashHistory } from 'react-router';

import App from 'containers/App';

// Import the base css styles and copy over the index.html
import './index.less';
import 'file?name=[name].[ext]!./index.html';

ReactDOM.render((
  <Router history={ hashHistory }>
    <Route path="/" component={ App }/>
  </Router>
), document.getElementById('app'));
