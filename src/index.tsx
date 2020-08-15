import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
    <App />,
  document.getElementById('root') as HTMLElement
);
serviceWorker.unregister();
