import React from 'react';
import { useStateValue } from '../StateProvider/StateProvider';
import './style/Product.css';

function Product({ id, title, image, price, rating }) {
	const [dispatch] = useStateValue();

	const addToBasket = () => {
		//
		dispatch({
			type: 'ADD_TO_BASKET',
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
					<srong>{price}</srong>
				</p>
				<div className='product__rating'>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>
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
