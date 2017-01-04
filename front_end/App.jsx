//REACT
import React  from 'react';
import ReactDOM from 'react-dom';
import{Route,Router,browserHistory,IndexRoute} from 'react-router';


//Components
import LogIn from './components/login-page.jsx';
import SignUp from './components/signup-page.jsx';
import HomePage from './components/homepage.jsx';
import Navbar from './components/navbar.jsx';
import ProfilePage from './components/profile-page.jsx';
import LogOut from './components/logout-page.jsx';
// import Timer from './components/timer-page.jsx';
import createTask from './components/createTask-page.jsx';
// import GetTask from './components/getTask.jsx';
// import SingleTask from './components/singleTasks.jsx';
//CSS
import './app.css';


const App = React.createClass({
	render(){
		return(
		<div>	
		<div className="navbar">
			<Navbar/>	
		</div>
		<center>

		<div className="heading">
		<h1 className="title">HUSTLE</h1>
		<p> Don't Talk About It. Be About It.</p>
		</div>
		
		</center>
		{this.props.children}
		</div>
		)
	}
})

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={HomePage}/>
			<Route path="signup" component={SignUp}/>
			<Route path="login" component={LogIn}/>
			<Route path="logout" component={LogOut}/>
			<Route path="profile" component={ProfilePage}/>
			<Route path="createtask" component={createTask}/>
		</Route>	
	</Router>,
document.getElementById('root')
)