import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';
import { useStateValue } from '../StateProvider/StateProvider';
import './style/Subtotal.css';

function Subtotal() {
	const [{ basket }] = useStateValue();

	return (
		<div id='subtotal'>
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket.length} items):{' '}
							<strong>{value}</strong>
						</p>
						<small className='subtotal__gift'>
							<input type='checkbox' className='checkbox' />
							This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={'text'}
				thousandSeperator={true}
				prefix={'$'}
			/>
			<button
				className='subtotal__btn'
				// onClick={(e) => history.push('/payment')}
			>
				Proceed to Checkout
			</button>
		</div>
	);
}

export default Subtotal;
