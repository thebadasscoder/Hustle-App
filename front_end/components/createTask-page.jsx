import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const createTask = React.createClass({
getInitialState(){
	return({email:'', title:'', text:''})
},
emailChange(e){
	this.setState({email:e.target.value})
},
titleChange(e){
	 this.setState({title:e.target.value})
}, 
textChange(e){
	 this.setState({text:e.target.value})
},
createTask(e){
	$.ajax({
		url:'/tasks',
		type:'POST',
		data:this.state
	})
	console.log(this.state, 'this is the state')
},
	render(){
		console.log('Title:', this.state.title)
		console.log('Text:', this.state.text)
		console.log(this.state, 'Data is here!')
		console.log(this.props, 'PROPS???')
		return (
		<div> 
			
			<center>
			<h1>New Task</h1>
			<form onSubmit={this.createTask}>
				<input type="text" value={this.state.email} onChange={this.emailChange} placeholder="Enter Your Email" className="form-control"></input><br/>
				<input type="text" value={this.state.title} onChange={this.titleChange} placeholder="Today I Will..." className="form-control"></input><br/>
				<input type="text" value={this.state.text} onChange={this.textChange} placeholder="Action Steps" className="form-control"></input><br/>
				<input type="submit" value="Submit" className="btn btn-pill btn-success"></input>
			</form>
			{this.props.value}
			</center>
		</div>
		)
	}
})

export default createTask; 
//