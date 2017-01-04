import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


const SignUp = React.createClass({
getInitialState(){
	return({name:'',email:'', password: ''})
},
nameChange(e){
this.setState({name:e.target.value})
},
emailChange(e){
 this.setState({email:e.target.value})
},
passwordChange(e){
this.setState({password:e.target.value})
},
createNewUser(e){
e.preventDefault();
  $.ajax({
  	url: '/signup',
  	type: 'POST',
  	data: this.state
  })
  alert('Thank you for signing up!')
},
	render(){
		console.log('name:',this.state.name);
		console.log('email:',this.state.email);
		console.log('password:',this.state.password);
		console.log(this.state, 'state')
		return(
		<div>
		<center>
			<h2 className="signupName">Sign Up</h2>
			<div className="signupBox">
			<form onSubmit={this.createNewUser}>
				Name:<input type="text" value={this.state.name} onChange={this.nameChange} className="form-control"></input><br/>
				EmailAddress:<input type="text" value={this.state.email} onChange={this.emailChange} className="form-control"></input><br/>
				Password:<input type="password" value={this.state.password} onChange={this.passwordChange} className="form-control"></input><br/>
				<input type="submit" value="SUBMIT" className="btn btn-pill btn-success"/>
			</form>
			<div id="link">
				<a href="http://localhost:3000/login" className="btn btn-link" role="button">LOGIN</a>
			</div>
			</div>
		</center>
		</div>
		)
	}
})

export default SignUp;
//