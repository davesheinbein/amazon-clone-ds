import React, { useEffect } from 'react';
// Components
import Header from '../../components/Header/Header';
import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login';
import Checkout from '../../components/Checkout/Checkout';
import Payment from '../../components/Payment/Payment';
import InProgress from '../../components/InProgress/InProgress';
import Footer from '../../components/Footer/Footer';
// Routing
import { Switch, Route } from 'react-router-dom';
// User Auth
import { auth } from '../../firebase';
// Redux
import { useStateValue } from '../../components/StateProvider/StateProvider';
// Style
import './style/App.css';

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
				<Route exact path='/inProgress'>
					<Header />
					<InProgress />
				</Route>
				<Route exact path='/login'>
					<Header />
					<Login />
				</Route>
				<Route exact path='/checkout'>
					<Header />
					<Checkout />
				</Route>
				<Route exact path='/payment'>
					<Header />
					<Payment />
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
