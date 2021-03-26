import {
	POST_UPLOAD_REQUEST,
	POST_UPLOAD_SUCCESS,
	POST_UPLOAD_FAILURE,
	GET_MY_POSTS_SUCCESS,
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

export const getMyPosts = () => {
	return (dispatch) => {
		axios
			.get('http://localhost:3000/post/myposts', {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			})
			.then((res) => {
				const { myPosts } = res.data;
				dispatch(getMyPostsSuccess(myPosts));
			});
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

export const getMyPostsSuccess = (myPosts) => {
	return {
		type: GET_MY_POSTS_SUCCESS,
		payload: myPosts,
	};
};
