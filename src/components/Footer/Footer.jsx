import React from 'react';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Link } from 'react-router-dom';
import './stlye/Footer.css';

function Footer() {
	return (
		<>
			<div className='footer'>
				<div className='footer__backToTopContainer'>
					<a href='#top' className='footer__backToTopLink'>
						<div className='footer__backToTop'>
							<KeyboardArrowUpIcon />
							Back to Top
						</div>
					</a>
				</div>
				<div className='footer_row'>
					<div className='footer__column'>
						<div className='footer__title'>
							Get To Know Us
						</div>
						<Link
							className='footer__links'
							to='/inProgress'>
							<div className='footer__link'>Careers</div>
						</Link>
						<Link
							className='footer__links'
							to='/inProgress'>
							<div className='footer__link'>Blog</div>
						</Link>
						<Link
							className='footer__links'
							to='/inProgress'>
							<div className='footer__link'>
								About Amazon
							</div>
						</Link>
						<Link
							className='footer__links'
							to='/inProgress'>
							<div className='footer__link'>
								Amazon Devices
							</div>
						</Link>
					</div>
					<div className='footer__column'>
						<div className='footer__title'>
							Make Money with Us
						</div>
						<Link
							className='footer__links'
							to='/inProgress'>
							<div className='footer__link'>
								Sell on Amazon
							</div>
						</Link>
						<Link
							className='footer__links'
							to='/inProgress'>
							<div className='footer__link'>
								Sell on Amazon Business
							</div>
						</Link>
						<Link
							className='footer__links'
							to='/inProgress'>
							<div className='footer__link'>
								Sell Your Apps on Amazon
							</div>
						</Link>
						<Link
							className='footer__links'
							to='/inProgress'>
							<div className='footer__link'>
								Become an Affiliate
							</div>
						</Link>
						<Link
							className='footer__links'
							to='/inProgress'>
							<div className='footer__link'>
								Advertise Your Products
							</div>
						</Link>
						<Link
							className='footer__links'
							to='/inProgress'>
							<div className='footer__link'>
								Self-Publish with Us
							</div>
						</Link>
						<Link
							className='footer__links'
							to='/inProgress'>
							<div className='footer__link'>
								Host an Amazon Hub
							</div>
						</Link>
					</div>
					<div className='footer__column'>
						<div className='footer__title'>
							Amazon Business Card
						</div>
						<Link
							className='footer__links'
							to='/inProgress'>
							<div className='footer__link'>
								Shop with Points
							</div>
						</Link>
						<Link
							className='footer__links'
							to='/inProgress'>
							<div className='footer__link'>
								Reload your Balance
							</div>
						</Link>
						<Link
							className='footer__links'
							to='/inProgress'>
							<div className='footer__link'>
								Amazon Currency Converter
							</div>
						</Link>
					</div>
					<div className='footer__column'>
						<div className='footer__title'>
							Let Us Help You
						</div>

						<Link
							className='footer__links'
							to='/inProgress'>
							<div className='footer__link'>
								Amazon and Covid-19
							</div>
						</Link>
						<Link
							className='footer__links'
							to='/inProgress'>
							<div className='footer__link'>
								Your Account
							</div>
						</Link>
						<Link
							className='footer__links'
							to='/inProgress'>
							<div className='footer__link'>
								Your Orders
							</div>
						</Link>
						<Link
							className='footer__links'
							to='/inProgress'>
							<div className='footer__link'>
								Shipping Rates & Policies
							</div>
						</Link>
						<Link
							className='footer__links'
							to='/inProgress'>
							<div className='footer__link'>
								Amazon Prime
							</div>
						</Link>
						<Link
							className='footer__links'
							to='/inProgress'>
							<div className='footer__link'>
								Returns & Replacements
							</div>
						</Link>
						<Link
							className='footer__links'
							to='/inProgress'>
							<div className='footer__link'>
								Manage Your Content & Devices
							</div>
						</Link>
						<Link
							className='footer__links'
							to='/inProgress'>
							<div className='footer__link'>
								Amazon Assistant
							</div>
						</Link>
						<Link
							className='footer__links'
							to='/inProgress'>
							<div className='footer__link'>Help</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
