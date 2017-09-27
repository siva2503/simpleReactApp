import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Counter from './Counter'


//render of ReactDOM tells the browser how to throw the component
// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Counter />, document.getElementById('root'));

registerServiceWorker();
