import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import './style/Login.css';

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// console.log('Login -> email', email);
	// console.log('Login -> password', password);

	const signIn = (e) => {
		e.preventDefault();
		// Pulls auth from local firebase storage and then
		// push ('/') the Email, and Password that have been locally
		// stored and sees if that email and password match up with
		// the ones on record.
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push('/');
			})
			.catch((error) => alert(error.message));
	};

	const register = (e) => {
		e.preventDefault();
		// Pulls auth from local firebase storage and then
		// push to ('/') the Email, and Password that have been locally
		// stored if the auth.
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				// console.log(auth);
				if (auth) {
					history.push('/');
				}
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className='login'>
			<div className='login__container'>
				<h1>Sign-in</h1>

				<form>
					<h5>Email</h5>
					<input
						type='text'
						// value is connected to state defined at the top
						value={email}
						// event is targeted using the setState prop
						// e.target value is what a user types in
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type='password'
						// value is connected to state defined at the top
						value={password}
						// event is targeted using the setState prop
						// e.target value is what a user types in
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button
						className='login__signInButton'
						// fumctionality defined at the top
						onClick={signIn}
						// type submit to be able to click enter to submit
						type='submit'>
						Sign In
					</button>
				</form>

				<p>
					By signing-in you agree to the AMAZON FAKE CLONE
					Conditions of Use & Sale. Please see our Privacy
					Notice, our Cookies Notice and our Interest-Based
					Ads Notice.
				</p>

				<button
					className='login__registerButton'
					// fumctionality defined at the top
					onClick={register}
					// type button to click to submit
					type='button'>
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
