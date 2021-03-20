import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';

const Home = () => {
	return (
		<div className='home'>
			<div className='text'>
				<h1>Lorem Ipsum Dolor Sit Amet</h1>
				<h3>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magni
					asperiores quas nulla natus maxime, ipsa explicabo est dolores ipsum!
				</h3>
				<Link to='/signup' className='button primary-button'>
					Sign Up
				</Link>
				<Link to='/login' className='button secondary-button'>
					Log In
				</Link>
			</div>
		</div>
	);
};

export default Home;
