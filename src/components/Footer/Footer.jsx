import React from 'react';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import './stlye/Footer.css';

function Footer() {
	return (
		<>
			<div className='footer__backToTopContainer'>
				<a href='#top' className='footer__backToTopLink'>
					<div className='footer__backToTop'>
						<KeyboardArrowUpIcon />
						Back to Top
					</div>
				</a>
			</div>
			<div className='footer'>
				<div className='footer__column'>
					<div className='footer__title'>
						Get To Know Us
					</div>
					<div className='footer__links'>Careers</div>
					<div className='footer__links'>Blog</div>
					<div className='footer__links'>About Amazon</div>
					<div className='footer__links'>
						Amazon Devices
					</div>
				</div>
				<div className='footer__column'>
					<div className='footer__title'>
						Make Money with Us
					</div>
					<div className='footer__links'>
						Sell on Amazon
					</div>
					<div className='footer__links'>
						Sell on Amazon Business
					</div>
					<div className='footer__links'>
						Sell Your Apps on Amazon
					</div>
					<div className='footer__links'>
						Become an Affiliate
					</div>
					<div className='footer__links'>
						Advertise Your Products
					</div>
					<div className='footer__links'>
						Self-Publish with Us
						<br />
					</div>
					<div className='footer__links'>
						Host an Amazon Hub
					</div>
				</div>
				<div className='footer__column'>
					<div className='footer__title'>
						Amazon Business Card
					</div>
					<div className='footer__title'>
						Shop with Points
					</div>
					<div className='footer__links'>
						Reload your Balance
					</div>
					<div className='footer__links'>
						Amazon Currency Converter
					</div>
				</div>
				<div className='footer__column'>
					<div className='footer__title'>
						Amazon and Covid-19
					</div>
					<div className='footer__title'>Your Account</div>
					<div className='footer__title'>Your Orders</div>
					<div className='footer__links'>
						Shipping Rates & Policies
					</div>
					<div className='footer__links'>Amazon Prime</div>
					<div className='footer__links'>
						Returns & Replacements
					</div>
					<div className='footer__links'>
						Manage Your Content & Devices
					</div>
					<div className='footer__links'>
						Amazon Assistant
					</div>
					<div className='footer__links'>Help</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
