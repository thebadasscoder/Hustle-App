import React from 'react';
import $ from 'jQuery';
import {Link} from 'react-router';


const GetTask = React.createClass({
getInitialState(){
	return({allTasks:null})
},
componentDidMount(){
	$.ajax({
		url:'/tasks/' + '20' ,
		type:'GET',
		success:((task)=>{
			task ? this.setState({allTasks: task}) : console.log('Error')
		})
	})
},
	render(){
		console.log(this.state.allTasks);
		return (
			<div>	
			<center>
			<h1>ALL OF THE TASKS</h1>
			</center>
			</div>
		)
	}
})
export default GetTask;