import React, { useEffect } from 'react';
import './MyPostsPage.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getMyPosts } from '../../../redux/post/postActions';
import MyPostsItem from '../../MyPostsItem/MyPostsItem.jsx';

const MyPostsPage = () => {
	const post = useSelector((state) => state.post);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMyPosts());
	}, [dispatch]);

	const myPostsList = () => {
		return post.myPosts.map((post) => (
			<li key={post._id}>
				<MyPostsItem post={post} />
			</li>
		));
	};

	return (
		<div className='my-posts-page'>
			<ul className='my-posts-list'>{post.myPosts && myPostsList()}</ul>
		</div>
	);
};

export default MyPostsPage;
