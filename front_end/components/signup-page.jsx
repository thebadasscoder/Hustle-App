import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const SignUp = React.createClass({
getInitialState(){
	return({fullName:'',email:'', password: ''})
},
nameChange(e){
this.setState({fullName:e.target.value})
},
emailChange(e){
 this.setState({email:e.target.value})
},
passwordChange(e){
this.setState({password:e.target.value})
},
handleSubmit(e){
	e.preventDefault();

},
	render(){
		console.log('name:',this.state.fullName);
		console.log('email:',this.state.email);
		console.log('password:',this.state.password);
		console.log(this.state.data)
		return(
		<div>
		<center>
			<h1>SignUp Page</h1>
			<form onSubmit={this.handleSubmit}>
				FullName:<input type="text" value={this.state.fullName} onChange={this.nameChange}></input><br/>
				EmailAddress:<input type="text" value={this.state.email} onChange={this.emailChange}></input><br/>
				Password:<input type="text" value={this.state.password} onChange={this.passwordChange}></input><br/>
				<input type="submit" value="onSubmit"/>
			</form>
		</center>
		</div>
		)
	}
})

export default SignUp;