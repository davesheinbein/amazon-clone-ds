import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login';
import { Switch, Route } from 'react-router-dom';
import './style/App.css';
import Checkout from '../../components/Checkout/Checkout';
import { auth } from '../../firebase';
import { useStateValue } from '../../components/StateProvider/StateProvider';
import Footer from '../../components/Footer/Footer';

function App() {
	const [{}, dispatch] = useStateValue();

	// will run one when app component loads
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log(authUser, '<< authUser');

			if (authUser) {
				// the use just loggedIn / was loggedIn
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				// the use loggedOut
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});
	}, []);

	return (
		<div className='app'>
			<Switch>
				<Route exact path='/login'>
					<Login />
				</Route>
				<Route exact path='/checkout'>
					<Header />
					<Checkout />
				</Route>
				<Route exact path='/'>
					<Header />
					<Home />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
