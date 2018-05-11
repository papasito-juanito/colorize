import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App';
import registerServiceWorker from '../src/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
