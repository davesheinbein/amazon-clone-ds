import React from 'react';
import moment from 'moment';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
// formats currency
import CurrencyFormat from 'react-currency-format';
import './style/Order.css';

function Order({ order }) {
	return (
		<div className='order'>
			<h2>Order</h2>
			<p>
				{moment
					.unix(order.data.created)
					.format('MMMM Do YYYY, h:mma')}
			</p>
			<p>
				<small>{order.id}</small>
			</p>
			{order.data.basket?.map((item) => (
				<CheckoutProduct
					key={item.id}
					id={item.id}
					title={item.title}
					price={item.price}
					rating={item.rating}
					image={item.image}
					hideButton
				/>
			))}
			<CurrencyFormat
				renderText={(value) => (
					<h3>Order Total: {value}</h3>
				)}
				decimalScale={2}
				value={order.data.amount / 100}
				displayType={'text'}
				thousandSeperator={true}
				prefix={'$'}
			/>
		</div>
	);
}

export default Order;
