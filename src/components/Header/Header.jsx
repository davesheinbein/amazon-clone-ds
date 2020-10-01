import React from 'react';
import './style/Header.css';

function Header() {
	return (
		<div className='header'>
			<img
				src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
				alt='Amazon logo'
				className='header__logo'
			/>
		</div>
	);
}

export default Header;
