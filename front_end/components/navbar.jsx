//React + ReactDOM 
import React from 'react';
import {Link} from 'react-router';

const Navbar = () =>(
	<div id="navbar">
		<Link to="/">HOME</Link>
		<br/>
		<Link to="/signup">SIGNUP</Link>
		<br/>
		<Link to="/login">LOG IN</Link>
		<br/>
		<Link to="/logout">LOGOUT</Link>
		<br/>
		<Link to="/profile">USERS PROFILE</Link>
		<br/>
		<Link to="/createtask">CREATE TASK</Link>
		<br/>


	</div>
)
export default Navbar;
//