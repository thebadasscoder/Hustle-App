import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import {browserHistory} from 'react-router'

const LogOut = React.createClass({

onClick(){
// browserHistory.push("/")
 $.ajax({
 	url: '/logout/:id',
 	type: 'GET',
 	success:((data)=>{
 		console.log(data)
 	})
 })
},
	render(){
		return (
		<div>
		<center>
		<a href="http://localhost:3000/logout" onClick={this.onClick} className="logout">LOGOUT</a>
		</center>
		</div>
		)
	}
})

export default LogOut;