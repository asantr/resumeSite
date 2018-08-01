import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './Admin.js';
import Main from './main.js';
import registerServiceWorker from './registerServiceWorker';

var curr_path = window.location.href;
var paths = curr_path.split("/");

var site = paths[paths.length -1];

if(site === 'admin'){
	ReactDOM.render(<Admin />, document.getElementById('root'));
}else{
	ReactDOM.render(<Main />, document.getElementById('root'));
}

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();