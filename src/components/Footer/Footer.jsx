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
					<div className='footer__links'>
						Careers
						<br />
						Blog
						<br />
						About Amazon
						<br />
						Amazon Devices
					</div>
				</div>
				<div className='footer__column'>
					<div className='footer__title'>
						Make Money with Us
					</div>
					<div className='footer__links'>
						Sell on Amazon
						<br />
						Sell on Amazon Business
						<br />
						Sell Your Apps on Amazon
						<br />
						Become an Affiliate
						<br />
						Advertise Your Products
						<br />
						Self-Publish with Us
						<br />
						Host an Amazon Hub
					</div>
				</div>
				<div className='footer__column'>
					<div className='footer__title'>
						Amazon Payment Products
					</div>
					<div className='footer__links'>
						Amazon Business Card
						<br />
						Shop with Points
						<br />
						Reload your Balance
						<br />
						Amazon Currency Converter
					</div>
				</div>
				<div className='footer__column'>
					<div className='footer__title'>
						Let Us Help You
					</div>
					<div className='footer__links'>
						Amazon and Covid-19
						<br />
						Your Account
						<br />
						Your Orders
						<br />
						Shipping Rates & Policies
						<br />
						Amazon Prime
						<br />
						Returns & Replacements
						<br />
						Manage Your Content & Devices
						<br />
						Amazon Assistant
						<br />
						Help
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
