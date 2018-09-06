import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import Procedures from './Procedures';

class App extends Component {
	render() {
		return (
			<Router>
				<div class="App">
					<nav>
					  <Link to="/">Home</Link>{' '}
					  <Link to="/procedures">Procedures</Link>{' '}
					  <Link to="/contact">Contact</Link>
					</nav>

					<Route exact path="/" component={Home} />
					<Route path="/procedures" component={Procedures} />
					<Route path="/contact" component={Contact} />
				</div>
			</Router>
		);
	}
}

export default App;
