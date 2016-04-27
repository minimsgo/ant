import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createHashHistory } from 'history';
import Routes from './Routes';

injectTapEventPlugin();

ReactDOM.render(
  <Router
    history={useRouterHistory(createHashHistory)({queryKey: false})}
    onUpdate={() => window.scrollTo(0, 0)}
  >
    {Routes}
  </Router>,
  document.getElementById('app'));
