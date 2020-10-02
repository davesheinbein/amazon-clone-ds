import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import RoomIcon from '@material-ui/icons/Room';
import './style/Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
import { auth } from '../../firebase';

function Header() {
	const [{ basket, user }] = useStateValue();
	const [show, handleShow] = useState(true);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener('scroll');
		};
	}, []);

	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<>
			<div className='header'>
				<Link to='/'>
					<img
						src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
						alt='Amazon logo'
						className='header__logo'
					/>
				</Link>

				<div className='header__search'>
					<input
						type='text'
						className='header__searchInput'
					/>
					<SearchIcon className='header__searchIcon' />
				</div>

				<div className='header__nav'>
					<Link to={!user && '/login'}>
						<div
							className='header__option'
							onClick={handleAuthentication}>
							<span className='header__optionLineOne'>
								Hello {!user ? 'Guest,' : user.email}
							</span>
							<span className='header__optionLineTwo'>
								{user ? 'Sign Out' : 'Sign In'}
							</span>
						</div>
					</Link>
					<div className='header__option'>
						<span className='header__optionLineOne'>
							Returns
						</span>
						<span className='header__optionLineTwo'>
							Orders
						</span>
					</div>
					<div className='header__option'>
						<span className='header__optionLineOne'>
							Your
						</span>
						<span className='header__optionLineTwo'>
							Prime
						</span>
					</div>
				</div>
				<Link to='/checkout'>
					<div className='header__optionBasket'>
						<ShoppingBasketIcon />
						<span className='header__optionLineTwo header__basketCount'>
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
			<div className='subHeader'>
				<div className='subHeader__container'>
					<RoomIcon />
					<div className='subHeader__option'>
						<span className='subHeader__optionLineOne'>
							Delivert to
						</span>
						<span className='subHeader__optionLineTwo'>
							USA
						</span>
					</div>
				</div>
				<div
					className={`subHeader__links ${
						show && 'subHeader__links'
					}`}>
					<Link to='/inProgress'>
						<span className='subHeader__link'>
							Today's Deals
						</span>
					</Link>
					<Link to='/inProgress'>
						<span className='subHeader__link'>
							Customer Service
						</span>
					</Link>
					<Link to='/inProgress'>
						<span className='subHeader__link'>
							Gift Cards
						</span>
					</Link>
					<Link to='/inProgress'>
						<span className='subHeader__link'>
							Registry
						</span>
					</Link>
					<Link to='/inProgress'>
						<span className='subHeader__link'>Sell</span>
					</Link>
				</div>
			</div>
		</>
	);
}

export default Header;
