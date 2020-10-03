import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
// https://www.npmjs.com/package/react-material-ui-carousel
import './style/Slider.css';

function Slider(props) {
	var items = [
		{
			name: 'Amazon #1',
			image:
				'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg',
		},
		{
			name: 'Amazon #2',
			image:
				'https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Evergreen/FreeTier/US-EN_052120_FreeTier_ACQ_GW_Hero_D_3000x1200_CV12._CB410067483_.jpg',
		},
		{
			name: 'Amazon #3',
			image:
				'https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MjA4OGQ5Mjkt/MjA4OGQ5Mjkt-YmEzOGJlNDMt-w3000._CB404645311_.jpg',
		},
		{
			name: 'Amazon #4',
			image:
				'https://images-na.ssl-images-amazon.com/images/G/01/kindle/tahoe/gateway/P38058783_US_EN_GW-Desktop_Tablet_b_3000x1200._CB405635128_.jpg',
		},
		{
			name: 'Amazon #5',
			image:
				'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/MzI3ZTkyOGIt/MzI3ZTkyOGIt-ZmRmYjdkNTQt-w3000._CB404399921_.jpg',
		},
	];

	return (
		<Carousel
			interval={10000}
			animation='slide'
			indicators={false}
			navButtonsAlwaysVisible={true}
			navButtonsAlwaysInvisible={false}>
			{items.map((item, i) => (
				<Item key={i} item={item} />
			))}
		</Carousel>
	);
}

function Item(props) {
	return (
		<Paper>
			<img
				src={props.item.image}
				alt={props.item.name}
				className='slider__image'
			/>
		</Paper>
	);
}

export default Slider;
