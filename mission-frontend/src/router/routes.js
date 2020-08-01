import React from 'react';
import MetalCostingPage from '../containers/pages/metalCostingPage';
import App from '../components/app/App';

const routes = [
  {
    path: ['/metal-costing', '', '/'],
    name: 'index-page',
    action: context => (
      <App context={context}>
        <MetalCostingPage context={context} />
      </App>
    )
  },
  {
    path: '(.*)',
    action: () => (
      <App>
        <h1>404 Not Found.</h1>
      </App>
    )
  }
];

export { routes };
