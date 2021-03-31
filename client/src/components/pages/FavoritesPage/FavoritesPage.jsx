import React from 'react';
import './FavoritesPage.scss';
import ImageGrid from '../../ImageGrid/ImageGrid.jsx';

const FavoritesPage = () => {
	return (
		<div className='favorites-page'>
			<ImageGrid postsType='favoritePosts' />
		</div>
	);
};

export default FavoritesPage;
