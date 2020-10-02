import React from 'react';
import Product from '../Product/Product';
import './style/Home.css';

function Home() {
	return (
		<div className='home' id='#top'>
			<div className='home__container'>
				<img
					src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
					alt='Home'
					className='home__image'
				/>

				<div className='home__row'>
					<Product
						id='12321341'
						title='The Lean Startup'
						price={19.99}
						rating={5}
						image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
					/>
					<Product
						id='12311215'
						title='Bose A20 Aviation Headset with Bluetooth Dual Plug Cable, Black'
						price={11.98}
						rating={4}
						image='https://m.media-amazon.com/images/I/71ekWFCunfL._AC_UY218_.jpg'
					/>
				</div>
				<div className='home__row'>
					<Product
						id='12321'
						title='RUNMUS Stereo Gaming Headset'
						price={70.99}
						rating={3}
						image='https://images-na.ssl-images-amazon.com/images/I/81PtEw326aL._AC_SX679_.jpg'
					/>
					<Product
						id='12321'
						title='Logitech G602 Lag-Free Wireless Gaming Mouse – 11 Programmable Buttons, Upto 2500 DPI 
                    Upto 250 hours of battery life'
						price={199.99}
						rating={4}
						image='https://images-na.ssl-images-amazon.com/images/I/81ZQgWwuVzL._AC_SY741_.jpg'
					/>
					<Product
						id='12321'
						title='Samsung 860 EVO 500GB 2.5 Inch SATA III Internal SSD (MZ-76E500B/AM) 
                     
                    '
						price={180}
						rating={3}
						image='https://images-na.ssl-images-amazon.com/images/I/814poe%2BIDsL._AC_SX679_.jpg'
					/>
				</div>
				<div className='home__row'>
					<Product
						id='12311216'
						title='Wyze Cam 1080p HD Indoor Wireless Smart Home Camera with Night Vision, 2-Way Audio, Works with Alexa & the Google Assistant, One Pack, White - WYZEC2'
						price={545.55}
						rating={5}
						image='https://m.media-amazon.com/images/I/71sesDsw95L._AC_UY218_.jpg'
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
