import Slider from '../Slider/Slider';
import React from 'react';
import Product from '../Product/Product';
import './style/Home.css';

function Home() {
	return (
		<div className='home' id='#top'>
			<div className='home__container'>
				{/* <img
					src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Evergreen/FreeTier/US-EN_052120_FreeTier_ACQ_GW_Hero_D_3000x1200_CV12._CB410067483_.jpg'
					alt='Home'
					className='home__image'
				/> */}
				<Slider />

				<div className='home__row'>
					<Product
						id='12321341'
						title='Lacoste Mens Lerond Bl 1 Fashion Sneaker'
						price={69.99}
						rating={5}
						image='https://images-na.ssl-images-amazon.com/images/I/61e-8ZpJD-L._AC_UL640_FMwebp_QL65_.jpg'
					/>
					<Product
						id='12311215'
						title='Razor A Kick Scooter'
						price={29.98}
						rating={4}
						image='https://images-na.ssl-images-amazon.com/images/I/71tJv0xuvDL._AC_UL640_FMwebp_QL65_.jpg'
					/>
				</div>
				<div className='home__row'>
					<Product
						id='12321'
						title='BIBO 3D Printer Dual Extruder Sturdy Frame WiFi Touch Screen Cut Printing Time in Half Filament Detect'
						price={599.99}
						rating={4}
						image='https://images-na.ssl-images-amazon.com/images/I/61DBVpOnoPL._AC_UY436_FMwebp_QL65_.jpg'
					/>
					<Product
						id='12321'
						title='Logitech G602 Lag-Free Wireless Gaming Mouse – 11 Programmable Buttons, Up to 2500 DPI 
								Up to 250 hours of battery life'
						price={199.99}
						rating={4}
						image='https://images-na.ssl-images-amazon.com/images/I/81ZQgWwuVzL._AC_SY741_.jpg'
					/>
					<Product
						id='12321'
						title='Samsung 860 EVO 500GB 2.5 Inch SATA III Internal SSD (MZ-76E500B/AM)'
						price={189.99}
						rating={3}
						image='https://images-na.ssl-images-amazon.com/images/I/814poe%2BIDsL._AC_SX679_.jpg'
					/>
				</div>
				<div className='home__row'>
					<Product
						id='12311216'
						title='Microsoft Xbox One X 1TB, 4K Ultra HD Gaming Console, Black (Renewed) (2017 Model)'
						price={299.99}
						rating={5}
						image='https://images-na.ssl-images-amazon.com/images/I/61OUjGDvtLL._AC_UY436_FMwebp_QL65_.jpg'
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
