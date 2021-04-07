import React, { useEffect } from 'react';
import './HomePage.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
	getAllPosts,
	getMyPosts,
	getFavoritePosts
} from '../../../redux/post/postActions';
import { Link } from 'react-router-dom';
import ImageGrid from '../../ImageGrid/ImageGrid.jsx';
import NoPostsMessage from '../../NoPostsMessage/NoPostsMessage.jsx';

const HomePage = (props) => {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const post = useSelector((state) => state.post);

	useEffect(() => {
		if (props.postsType === 'allPosts') {
			dispatch(getAllPosts());
		} else if (props.postsType === 'myPosts') {
			dispatch(getMyPosts());
		} else if (props.postsType === 'favoritePosts') {
			dispatch(getFavoritePosts());
		}
	}, []);

	return (
		<div className='home-page'>
			{!auth.isAuthenticated ? (
				<div className='landing-section'>
					<div className='text'>
						<h1>Lorem Ipsum Dolor Sit Amet</h1>
						<h3>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
							magni asperiores quas nulla natus maxime, ipsa explicabo est
							dolores ipsum!
						</h3>
						<Link to='/signup' className='button primary-button'>
							Sign Up
						</Link>
						<Link to='/login' className='button secondary-button'>
							Log In
						</Link>
					</div>
				</div>
			) : (
				<div className='all-posts'>
					{post.loading && (
						<div className='loading-overlay'>
							<div className='spinner'></div>
						</div>
					)}
					{post[props.postsType].length > 0 ? (
						<ImageGrid postsType={props.postsType} />
					) : (
						!post.loading && <NoPostsMessage postsType={props.postsType} />
					)}
				</div>
			)}
		</div>
	);
};

export default HomePage;
