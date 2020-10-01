import React from 'react';
import './style/Checkout.css';

function Checkout() {
	return (
		<div className='checkout'>
			<div className='checkout__left'>
				<img
					className='checkout__ad'
					src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg'
					alt='Checkout Ad'
				/>
				<h2 className='checkout__title'>
					Your Shopping Basket
				</h2>
			</div>
			<div className='checkout__right'>
				Subtotal Goes here
				{/* <BasketItem/> */}
				{/* <BasketItem/> */}
				{/* <BasketItem/> */}
				{/* <BasketItem/> */}
				{/* <BasketItem/> */}
				{/* <BasketItem/> */}
				{/* <BasketItem/> */}
			</div>
		</div>
	);
}

export default Checkout;
