import React from 'react';
import ReactDOM from 'react-dom';
// import {browserHistory} from 'react-router';

const ProfilePage= React.createClass({
getInitialState(){
	return({text: ''})

},
handleChange(e){
	this.setState({text:e.target.value});
},
handleSubmit(e){
	// browserHistory.push("/createtask")
	e.preventDefault();
},
	render(){
	console.log('Main Goal:',this.state.text)
	console.log('PROPS?', this.props)
		return(
		<div>
		<center>
		<h3>WHAT IS YOUR MAIN FOCUS FOR TODAY?</h3>
			<form onSubmit={this.handleSubmit}>
			<input type="text" className="text-line" value={this.state.text} onChange={this.handleChange}/>
			</form>

		</center>
		</div>
		)
	}
})

export default ProfilePage;


//
// <div className="header">
// 			<a href="#" className="nav=trigger"><span></span></a>
// 		</div>

// 		<div className="side-nav">
// 			<nav>
// 				<ul>
// 					<li>
// 						<a href="http://localhost:3000/">
// 							<span><i className="fa fa-home"></i></span>
// 							<span>Home</span>
// 						</a>
// 					</li>
// 					<li>
// 						<a href="#">
// 							<span><i className="fa fa-tasks"></i></span>
// 							<span>Progress</span>
// 						</a>
// 					</li>
// 					<li>
// 						<a href="#">
// 							<span><i className="fa fa-calendar"></i></span>
// 							<span>Schedule</span>
// 						</a>
// 					</li>
// 					<li>
// 						<a href="#">
// 							<span><i className="fa fa-list-ul"></i></span>
// 							<span>Tasks</span>
// 						</a>
// 					</li>
// 					<li>
// 						<a href="#">
// 							<span><i className="fa fa-clock-o"></i></span>
// 							<span>Timer</span>
// 						</a>
// 					</li>
// 					<li>
// 						<a href="#">
// 							<span><i className="fa fa-users"></i></span>
// 							<span>Connect Hustlers</span>
// 						</a>
// 					</li>
// 				</ul>
// 			</nav>
// 		</div>