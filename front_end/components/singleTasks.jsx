import React from 'react';
import $ from 'jQuery';
import {Link} from 'react-router';



const SingleTask = React.createClass({
getInitialState(){
	return({task: null})
}, 
componentDidMount(){
	$.ajax({
		url:'/tasks/:' + this.props.params.UserId,
		type: 'GET',
		success:((task)=>{
			this.setState({task:task})
			console.log('I AM TASK', task)
		})
	})
},
	render(){
		console.log(this.props)
		if(!this.state.task){
			return(<div>Loading.....</div>)
		}else{
			return(
			<div>
			<h1>{this.state.task.title}</h1>
			<p>{this.state.task.text}</p>

			</div>
			)
		}
	}
})

export default SingleTask;