import React from 'react';
import { useStateValue } from '../StateProvider/StateProvider';
import './style/Product.css';

function Product({ id, title, image, price, rating }) {
	// dispatched from the reducer that is pushed down throw the state provider
	const [dispatch] = useStateValue();

	// this defines a function that adds items to a basket
	const addToBasket = () => {
		// this is where dispatch is called
		dispatch({
			// this is were the action type is connected to the reducer
			type: 'ADD_TO_BASKET',
			// here is where the action.item is defined
			// the id, title, image, price, rating are being passed down through props
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};
	return (
		<div className='product'>
			<div className='product__info'>
				<p>{title}</p>
				<p className='product__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='product__rating'>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>
								<span role='img' aria-label='star'>
									⭐
								</span>
							</p>
						))}
				</div>
			</div>
			<img src={image} alt='Product' />
			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default Product;
