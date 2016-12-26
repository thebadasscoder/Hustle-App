const React = require('react');
const ReactDOM = require('react-dom');


const App = React.createClass({
	render(){
		return(
		<div>	
			<h1>Welcome!</h1>
		</div>
		)
	}
});

ReactDOM.render(
	<App/>,
document.getElementById('root')
)