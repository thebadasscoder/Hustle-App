import React from 'react';
import ReactDOM from 'react-dom';

const LogIn = React.createClass({
getInitialState(){
	return({email:'', password: ''})
},
emailChange(e){
 this.setState({email:e.target.value})
},
passwordChange(e){
this.setState({password:e.target.value})
},
onClick(){
	//THIS IS WHERE THE AJAX CALL IS GOING TO GO
},

render(){
	return(
	<div>
	<center>
		<h1>Login Page </h1>
		EmailAddress:<input type="text" value={this.state.email} onChange={this.emailChange}></input>
		Password:<input type="text" value={this.state.password} onChange={this.passwordChange}></input>
		<button>Login</button>
	</center>
	</div>
		)
	}
})

export default LogIn;