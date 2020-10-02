import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../StateProvider/StateProvider';
import './style/Payment.css';

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue();

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
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
