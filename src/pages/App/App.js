import React, { useEffect } from 'react';
// Components
import Header from '../../components/Header/Header';
import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login';
import Checkout from '../../components/Checkout/Checkout';
import Payment from '../../components/Payment/Payment';
import InProgress from '../../components/InProgress/InProgress';
import Footer from '../../components/Footer/Footer';
import Orders from '../../components/Orders/Orders';
// Routing
import { Switch, Route } from 'react-router-dom';
// User Auth
import { auth } from '../../firebase';
// Context API
import { useStateValue } from '../../components/StateProvider/StateProvider';
// Stripe
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// Style
import './style/App.css';

// Stripe Publishable key https://dashboard.stripe.com/test/apikeys
// promise that compiles and load stripe based on Key
const promise = loadStripe(process.env.REACT_APP_STRIPEKEY);

function App() {
	const [{}, dispatch] = useStateValue();

	// will run once when app component loads
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// the user just logged in / was logged in
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				// the user logged out
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});
	}, [dispatch]);

	return (
		<div className='app'>
			<Header />
			<Switch>
				<Route exact path='/inProgress'>
					<InProgress />
				</Route>
				<Route exact path='/login'>
					<Login />
				</Route>
				<Route exact path='/orders'>
					<Orders />
				</Route>
				<Route exact path='/checkout'>
					<Checkout />
				</Route>
				<Route exact path='/payment'>
					{/* Payment component is nested within the Elements */}
					{/* imported from @stripe/react-stripe-js */}
					{/* promise is defined above with */}
					{/* loadStripe imported from @stripe/stripe-js*/}
					<Elements stripe={promise}>
						<Payment />
					</Elements>
				</Route>
				<Route exact path='/'>
					<Home />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
