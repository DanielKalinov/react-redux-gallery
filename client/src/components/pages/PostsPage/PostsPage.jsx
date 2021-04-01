import React, { useEffect } from 'react';
import './PostsPage.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
	getAllPosts,
	getMyPosts,
	getFavoritePosts
} from '../../../redux/post/postActions';
import ImageGrid from '../../ImageGrid/ImageGrid.jsx';
import NoPostsMessage from '../../NoPostsMessage/NoPostsMessage.jsx';

const PostsPage = (props) => {
	const dispatch = useDispatch();
	const post = useSelector((state) => state.post);

	useEffect(() => {
		if (props.postsType === 'allPosts') {
			dispatch(getAllPosts());
		} else if (props.postsType === 'myPosts') {
			dispatch(getMyPosts());
		} else if (props.postsType === 'favoritePosts') {
			dispatch(getFavoritePosts());
		}
	}, [props.postsType, dispatch]);

	return (
		<div className='posts-page'>
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
	);
};

export default PostsPage;
