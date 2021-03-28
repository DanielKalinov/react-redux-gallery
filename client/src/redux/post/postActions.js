import {
	POST_UPLOAD_REQUEST,
	POST_UPLOAD_SUCCESS,
	POST_UPLOAD_FAILURE,
	GET_ALL_POSTS_REQUEST,
	GET_ALL_POSTS_SUCCESS,
	GET_MY_POSTS_REQUEST,
	GET_MY_POSTS_SUCCESS,
	GET_MY_POSTS_FAILURE,
} from './postTypes';
import axios from 'axios';

export const postUpload = (image) => {
	return (dispatch) => {
		dispatch(postUploadRequest());

		return new Promise((resolve) => {
			const data = new FormData();
			data.append('image', image);
			const options = {
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			};

			axios
				.post('http://localhost:3000/post/upload', data, options)
				.then((res) => {
					const { userPosts } = res.data;
					dispatch(postUploadSuccess(userPosts));
					resolve();
				})
				.catch(() => {
					dispatch(postUploadFailure('Something went wrong'));
				});
		});
	};
};

export const getAllPosts = () => {
	return (dispatch) => {
		dispatch(getAllPostsRequest());
		axios.get('http://localhost:3000/post/allposts').then((res) => {
			const { allPosts } = res.data;
			dispatch(getAllPostsSuccess(allPosts));
		});
	};
};

export const getMyPosts = () => {
	return (dispatch) => {
		dispatch(getMyPostsRequest());
		axios
			.get('http://localhost:3000/post/myposts', {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			})
			.then((res) => {
				const { myPosts } = res.data;
				dispatch(getMyPostsSuccess(myPosts));
			})
			.catch(() => dispatch(getMyPostsFailure));
	};
};

export const postUploadRequest = () => {
	return {
		type: POST_UPLOAD_REQUEST,
	};
};

export const postUploadSuccess = (userPosts) => {
	return {
		type: POST_UPLOAD_SUCCESS,
		payload: userPosts,
	};
};

export const postUploadFailure = (err) => {
	return {
		type: POST_UPLOAD_FAILURE,
		payload: err,
	};
};

export const getAllPostsRequest = () => {
	return {
		type: GET_ALL_POSTS_REQUEST,
	};
};

export const getAllPostsSuccess = (allPosts) => {
	return {
		type: GET_ALL_POSTS_SUCCESS,
		payload: allPosts,
	};
};

export const getMyPostsRequest = () => {
	return {
		type: GET_MY_POSTS_REQUEST,
	};
};

export const getMyPostsSuccess = (myPosts) => {
	return {
		type: GET_MY_POSTS_SUCCESS,
		payload: myPosts,
	};
};

export const getMyPostsFailure = () => {
	return {
		type: GET_MY_POSTS_FAILURE,
	};
};
