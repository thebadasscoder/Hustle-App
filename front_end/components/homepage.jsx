import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';

const HomePage = React.createClass({
signUpOnClick(e){
  browserHistory.push("/signup")
  e.preventDefault();
},
	render(){
		return(
		<div>
		<center>
			<button type="button"onClick={this.signUpOnClick}>Get Started</button>
		</center>
		</div>
		)
	}
})
export default HomePage;