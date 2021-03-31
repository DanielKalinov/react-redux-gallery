import {
	POST_UPLOAD_REQUEST,
	POST_UPLOAD_SUCCESS,
	POST_UPLOAD_FAILURE,
	GET_ALL_POSTS_REQUEST,
	GET_ALL_POSTS_SUCCESS,
	GET_MY_POSTS_REQUEST,
	GET_MY_POSTS_SUCCESS,
	GET_MY_POSTS_FAILURE,
	GET_FAVORITE_POSTS_SUCCESS,
	GET_FAVORITE_POSTS_REQUEST,
	GET_FAVORITE_POSTS_FAILURE,
} from '../post/postTypes';

const initialState = {
	allPosts: null,
	myPosts: null,
	favoritePosts: null,
	loading: false,
	err: null,
};

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_UPLOAD_REQUEST: {
			return { ...state, loading: true };
		}
		case POST_UPLOAD_SUCCESS: {
			return { ...state, userPosts: action.payload, loading: false, err: null };
		}
		case POST_UPLOAD_FAILURE: {
			return { ...state, loading: false, err: action.payload };
		}
		case GET_ALL_POSTS_REQUEST: {
			return { ...state, allPosts: action.payload, loading: true };
		}
		case GET_ALL_POSTS_SUCCESS: {
			return { ...state, allPosts: action.payload, loading: false };
		}
		case GET_MY_POSTS_REQUEST: {
			return { ...state, loading: true };
		}
		case GET_MY_POSTS_SUCCESS: {
			return { ...state, myPosts: action.payload, loading: false };
		}
		case GET_MY_POSTS_FAILURE: {
			return { ...state, loading: false };
		}
		case GET_FAVORITE_POSTS_REQUEST: {
			return { ...state, loading: true };
		}
		case GET_FAVORITE_POSTS_SUCCESS: {
			return { ...state, favoritePosts: action.payload, loading: false };
		}
		case GET_FAVORITE_POSTS_FAILURE: {
			return { ...state, loading: false };
		}
		default: {
			return state;
		}
	}
};

export default postReducer;
