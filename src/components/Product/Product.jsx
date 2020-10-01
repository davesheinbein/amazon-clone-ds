import React from 'react';
import './style/Product.css';

function Product({ title, image, price, rating }) {
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
							<p>⭐</p>
						))}
				</div>
			</div>
			<img src={image} alt='Product Image' />
			<button>Add to Basket</button>
		</div>
	);
}

export default Product;
