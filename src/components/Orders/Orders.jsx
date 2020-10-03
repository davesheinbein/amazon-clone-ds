import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import { db } from '../../firebase';
import { useStateValue } from '../StateProvider/StateProvider';
import './style/Orders.css';

function Orders() {
	const [{ basket, user }, dispatch] = useStateValue();
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		if (user) {
			// grabs all orders and sorts them in descending order
			// then setOrder to map over all of the information stored in the db
			// snapshot reads out the order from the db
			db.collection('users')
				.doc(user?.uid)
				.collection('orders')
				.orderBy('created', 'desc')
				.onSnapshot((snapshot) =>
					setOrders(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					)
				);
		} else {
			setOrders([]);
		}
	}, [user]);

	return (
		<div className='orders'>
			<h1>Your Orders</h1>
			<div className='orders__order'>
				{orders?.map((order) => (
					<Order order={order} />
				))}
			</div>
		</div>
	);
}

export default Orders;
