import React from 'react';
import { Link } from 'react-router-dom';
import './style/InProgress.css';

function InProgress() {
	return (
		<div className='inProgrss'>
			<div className='inProgress__container'>
				<h1 className='inProgress__title'>
					In progress...
				</h1>
				<h5 className='inProgress__message'>
					Check again later...
				</h5>
				<div className='inProgress__buttonContainer'>
					<Link to='/' style={{ textDecoration: 'none' }}>
						<button
							className='inProgress__button'
							type='button'>
							Go Home
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default InProgress;
