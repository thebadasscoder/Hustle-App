import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {browserHistory} from 'react-router';


const LogIn = React.createClass({
getInitialState(){
	return({username:'', password: ''})
},
emailChange(e){
 this.setState({username:e.target.value})
},
passwordChange(e){
this.setState({password:e.target.value})
},
LogInUser(e){
browserHistory.push("/profile")
e.preventDefault();
  $.ajax({
  	url:'/login',
  	type: 'POST',
  	data: this.state
  })
},
render(){
	console.log(this.state.username, ':Email')
	console.log(this.state.password, ':Password')
	console.log(this.state, 'this is my data')
	return(
	<div>
		<center>
			<h1>Login</h1>
			<form onSubmit={this.LogInUser}>
			EmailAddress:<input type="text" name="email"value={this.state.username} onChange={this.emailChange} className="form-control"></input>
			Password:<input type="password" name="password"value={this.state.password} onChange={this.passwordChange} className="form-control"></input><br/>
			<input type="submit" value="LETS TAKE ACTION!"  className="btn btn-pill btn-danger"></input>
			</form>
		</center>
	</div>
		)
	}
})

export default LogIn;
//