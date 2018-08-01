import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Admin from './Admin.js';
import Main from './main.js';
import ContactForm from './contact.js';
import ReactDOM from 'react-dom';
import * as globals from './globals.js';


var curr_path = window.location.href;
var paths = curr_path.split("/");

var site = paths[paths.length -1];

class App extends Component{
	render(){
		return;
	}
}
export default App;


if(site === 'admin'){
	ReactDOM.render(<Admin />, document.getElementById('root'));
}else{
	ReactDOM.render(<Main />, document.getElementById('root'));
}



