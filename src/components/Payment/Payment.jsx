import React, { useEffect, useState } from 'react';
// Routing
import { Link, useHistory } from 'react-router-dom';
// Components
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
// Redux
import { useStateValue } from '../StateProvider/StateProvider';
import { getBasketTotal } from '../../reducer';
// Stripe
import {
	CardElement,
	useElements,
	useStripe,
} from '@stripe/react-stripe-js';
// CurrencyFormat
import CurrencyFormat from 'react-currency-format';
// axios
import axios from '../../axios';
// firebase
import { db } from '../../firebase';
// Style
import './style/Payment.css';

function Payment() {
	// Redux
	const [{ basket, user }, dispatch] = useStateValue();

	// defines history
	const history = useHistory();

	// stripe
	const stripe = useStripe();
	const elements = useElements();

	// Creating local state
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState('');
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState(true);

	useEffect(() => {
		//generate the special stripe secret which allows us to charge a customer
		// Whenever the basket changes it generates a new secret this will update
		// the special stripe secret which allows to chage the customer the correct amount
		const getClientSecret = async () => {
			const response = await axios({
				method: 'post',
				// Stripe expects the total in a currencies subunits
				// thats why we multiply by 100 to make it work with dollars
				// other currencies may be multiplied by a different value
				url: `/payments/create?total=${
					getBasketTotal(basket) * 100
				}`,
			});
			setClientSecret(response.data.clientSecret);
		};
		getClientSecret();
	}, [basket]);

	// console.log(clientSecret, '<<< clientSecret');
	// console.log(user, '<<< user');

	// Handles Stripe submission
	const handleSubmit = async (e) => {
		// e.preventDefault(); will stop it from refreshing
		e.preventDefault();
		setProcessing(true);
		// uses the clientSecret to confirm the card payment
		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				// the credit card itself
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				// paymentIntent de-structured from response
				// paymentIntent = payment confirmation via stripe

				// targeting the firestore db specifically the
				// users collection within the db
				// looking a specific user by there uid
				// the specifying the orders that user is attached to
				// then selects the paymentIntent by it's id and then
				// sets the following info
				// paymentIntent.amount & paymentIntent.created both
				// pull the exact amounts from stripe
				db.collection('users')
					.doc(user?.uid)
					.collection('orders')
					.doc(paymentIntent.id)
					.set({
						basket: basket,
						amount: paymentIntent.amount,
						created: paymentIntent.created,
					});

				// setting states defined above
				setSucceeded(true);
				setError(null);
				setProcessing(false);

				dispatch({
					type: 'EMPTY_BASKET',
				});

				history.replace('/orders');
			});
	};

	// Handles changes to the payment information
	const handleChange = (e) => {
		//Listen for changes inside of the CardElement
		// and display any errors as the customer types their card details
		setDisabled(e.empty);
		setError(e.error ? e.message : '');
	};

	return (
		<div className='payment'>
			<div className='payment__container'>
				<h1>
					Checkout (
					<Link to='checkout'>{basket?.length} items</Link>)
				</h1>

				{/* delivery address */}
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Delivery Address</h3>
					</div>
					<div className='payment__address'>
						<p>{user?.email}</p>
						<p>123 Address Lane</p>
						<p>Los Angeles, CA</p>
					</div>
				</div>

				{/* Review items */}
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Review items and delivery</h3>
					</div>
					<div className='payment__items'>
						{basket.map((item) => (
							<CheckoutProduct
								key={item.id}
								id={item.id}
								title={item.title}
								price={item.price}
								rating={item.rating}
								image={item.image}
							/>
						))}
					</div>
				</div>

				{/* Payment method */}
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Payment Method</h3>
					</div>
					<div className='payment__details'>
						{/* strips stuff */}
						<form onSubmit={handleSubmit}>
							<CardElement
								onChange={handleChange}
								className='payment__card'
							/>
							<div className='payment__priceContainer'>
								{/* Renders out the final price */}
								<CurrencyFormat
									renderText={(value) => (
										<h3>Order Total: {value}</h3>
									)}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={'text'}
									thousandSeperator={true}
									prefix={'$'}
								/>
								<button
									disabled={
										processing || disabled || succeeded
									}>
									<span>
										{processing ? (
											<p>Processing...</p>
										) : (
											'Buy Now'
										)}
									</span>
								</button>
							</div>
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
