import React from 'react';
import './style/Product.css';

function Product() {
	return (
		<div className='product'>
			<div className='product__info'>
				<p>Product Info</p>
				<p className='product__price'>
					<small>$</small>
					<srong>19.99</srong>
				</p>
				<div className='product__rating'>
					<p>⭐</p>
					<p>⭐</p>
					<p>⭐</p>
				</div>
			</div>
			<img
				src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1mE54JuMyrOSqL4_0lGVcn3nHGM_RttkuC_qopuTtiHf9Dm6ESK0b-hEHEcZyjOvskZHfCLVa&usqp=CAc'
				alt='Product Image'
			/>
			<button>Add to Basket</button>
		</div>
	);
}

export default Product;
