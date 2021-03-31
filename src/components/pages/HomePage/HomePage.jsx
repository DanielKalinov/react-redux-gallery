import React from 'react';
import './HomePage.scss';
import ImageGrid from '../../ImageGrid/ImageGrid.jsx';

const Home = () => {
	return (
		<div className='home-page'>
			<ImageGrid postsType='allPosts' />
		</div>
	);
};

export default Home;
