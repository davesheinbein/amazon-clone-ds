import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './style/Subtotal.css';

function Subtotal() {
	return (
		<div id='subtotal'>
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal (0 items) : <strong>0</strong>
						</p>
						<small className='subtotal__gift'>
							<input type='checkbox' className='checkbox' />
							This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={0}
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
