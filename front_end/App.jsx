//REACT
import React  from 'react';
import ReactDOM from 'react-dom';
import{Route,Router,browserHistory,IndexRoute} from 'react-router';

//Components
import LogIn from './components/login-page.jsx';
import SignUp from './components/signup-page.jsx';
import HomePage from './components/homepage.jsx';
import Navbar from './components/navbar.jsx';

//CSS
import './app.css';


const App = React.createClass({
	render(){
		return(
		<div>	

		<div className="navbar">
			<Navbar/>	
		</div>

		<div className="title">
			<center>
			<h1>HUSTLE</h1>
			</center>	
		</div>	
		{this.props.children}
		</div>
		)
	}
})

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
		<IndexRoute component={HomePage}/>
		<Route path="login" component={LogIn}/>
		<Route path="signup" component={SignUp}/>
		</Route>	
	</Router>,
document.getElementById('root')
)