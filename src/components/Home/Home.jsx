import React from 'react';
import Product from '../Product/Product';
import './style/Home.css';

function Home() {
	return (
		<div className='home'>
			<div className='home__container'>
				<img
					src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
					alt='Home Image'
					className='home__image'
				/>

				<div className='home__row'>
					<Product
						title='Razor'
						price={59.99}
						image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1mE54JuMyrOSqL4_0lGVcn3nHGM_RttkuC_qopuTtiHf9Dm6ESK0b-hEHEcZyjOvskZHfCLVa&usqp=CAc'
						rating={5}
					/>
					{/* <Product /> */}
				</div>
				<div className='home__row'>
					{/* <Product />
					<Product />
					<Product /> */}
				</div>
				<div className='home__row'>{/* <Product /> */}</div>
			</div>
		</div>
	);
}

export default Home;
