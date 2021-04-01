import React from 'react';
import './NoPostsMessage.scss';
import { Link } from 'react-router-dom';

const NoPostsMessage = (props) => {
	const message = () => {
		if (props.postsType === 'allPosts') {
			return (
				<div>
					<h2>No posts have been added yet</h2>
					<Link to='/upload' className='button primary-button'>
						Upload
					</Link>
				</div>
			);
		} else if (props.postsType === 'myPosts') {
			return (
				<div>
					<h2>You have no posts yet</h2>
					<Link to='/upload' className='button primary-button'>
						Upload
					</Link>
				</div>
			);
		} else if (props.postsType === 'favoritePosts') {
			return (
				<div>
					<h2>You have no favorites yet</h2>
					<Link to='/home' className='button primary-button'>
						Browse
					</Link>
				</div>
			);
		}
	};
	return <div className='no-posts-message'>{message()}</div>;
};

export default NoPostsMessage;
