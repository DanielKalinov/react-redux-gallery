import {
	GET_ALL_POSTS_REQUEST,
	GET_ALL_POSTS_SUCCESS,
	GET_MY_POSTS_REQUEST,
	GET_MY_POSTS_SUCCESS,
	GET_FAVORITE_POSTS_REQUEST,
	GET_FAVORITE_POSTS_SUCCESS,
	POST_UPLOAD_REQUEST,
	POST_UPLOAD_SUCCESS,
	POST_UPLOAD_FAILURE,
	FAVORITE_POST_SUCCESS,
	DELETE_POST_SUCCESS
} from './postTypes';
import axios from 'axios';

export const getAllPosts = () => {
	return (dispatch) => {
		dispatch(getAllPostsRequest());
		axios.get('http://localhost:3000/post/allposts').then((res) => {
			const { allPosts } = res.data;
			dispatch(getAllPostsSuccess(allPosts));
		});
	};
};

export const getAllPostsRequest = () => {
	return {
		type: GET_ALL_POSTS_REQUEST
	};
};

export const getAllPostsSuccess = (allPosts) => {
	return {
		type: GET_ALL_POSTS_SUCCESS,
		payload: allPosts
	};
};

export const getMyPosts = () => {
	return (dispatch) => {
		dispatch(getMyPostsRequest());
		axios
			.get('http://localhost:3000/post/myposts', {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
			.then((res) => {
				const { myPosts } = res.data;
				dispatch(getMyPostsSuccess(myPosts));
			});
	};
};

export const getMyPostsRequest = () => {
	return {
		type: GET_MY_POSTS_REQUEST
	};
};

export const getMyPostsSuccess = (myPosts) => {
	return {
		type: GET_MY_POSTS_SUCCESS,
		payload: myPosts
	};
};

export const getFavoritePosts = () => {
	return (dispatch) => {
		dispatch(getFavoritePostsRequest());
		axios
			.get('http://localhost:3000/post/favoriteposts', {
				headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
			})
			.then((res) => {
				const { favoritePosts } = res.data;
				dispatch(getFavoritePostsSuccess(favoritePosts));
			});
	};
};

export const getFavoritePostsRequest = () => {
	return {
		type: GET_FAVORITE_POSTS_REQUEST
	};
};

export const getFavoritePostsSuccess = (favoritePosts) => {
	return {
		type: GET_FAVORITE_POSTS_SUCCESS,
		payload: favoritePosts
	};
};

export const postUpload = (image) => {
	return (dispatch) => {
		dispatch(postUploadRequest());

		return new Promise((resolve) => {
			const data = new FormData();
			data.append('image', image);
			const options = {
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
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

export const postUploadRequest = () => {
	return {
		type: POST_UPLOAD_REQUEST
	};
};

export const postUploadSuccess = (userPosts) => {
	return {
		type: POST_UPLOAD_SUCCESS,
		payload: userPosts
	};
};

export const postUploadFailure = (err) => {
	return {
		type: POST_UPLOAD_FAILURE,
		payload: err
	};
};

export const favoritePost = (id) => {
	return (dispatch) => {
		axios
			.put(
				`http://localhost:3000/post/favoritepost/${id}`,
				{},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`
					}
				}
			)
			.then((res) => {
				const { allPosts, favoritePosts } = res.data;
				dispatch(favoritePostSuccess(allPosts, favoritePosts));
			});
	};
};

export const favoritePostSuccess = (allPosts, favoritePosts) => {
	return {
		type: FAVORITE_POST_SUCCESS,
		payload: { allPosts, favoritePosts }
	};
};

export const deletePost = (id) => {
	return (dispatch) => {
		axios
			.delete(`http://localhost:3000/post/deletepost/${id}`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
			.then((res) => {
				const { allPosts, myPosts } = res.data;

				dispatch(deletePostSuccess(allPosts, myPosts));
			});
	};
};

export const deletePostSuccess = (allPosts, myPosts) => {
	return {
		type: DELETE_POST_SUCCESS,
		payload: { allPosts, myPosts }
	};
};
