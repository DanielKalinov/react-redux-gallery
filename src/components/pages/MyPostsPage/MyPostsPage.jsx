import React from 'react';
import './MyPostsPage.scss';
import ImageGrid from '../../ImageGrid/ImageGrid.jsx';

const MyPostsPage = () => {
	return (
		<div className='my-posts-page'>
			<ImageGrid postsType='myPosts' />
		</div>
	);
};

export default MyPostsPage;
