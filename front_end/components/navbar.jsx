//React + ReactDOM 
import React from 'react';
import {Link} from 'react-router';

const Navbar = () =>(
	<div id="navbar">
		<Link to="/">HOME </Link>
		<br/>
		<Link to="/login">LOG IN</Link>
		<br/>
		<Link to="/signup">SIGN UP</Link>
	</div>
)
export default Navbar;
