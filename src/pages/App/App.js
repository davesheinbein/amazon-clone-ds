import React from 'react';
import Header from '../../components/Header/Header';
import Home from '../../components/Home/Home';
import { Switch, Route } from 'react-router-dom';
import './style/App.css';
import Checkout from '../../components/Checkout/Checkout';

function App() {
	return (
		<div className='app'>
			<Header />
			<Switch>
				<Route exact path='/checkout'>
					<Checkout />
				</Route>
				<Route exact path='/'>
					<Home />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
