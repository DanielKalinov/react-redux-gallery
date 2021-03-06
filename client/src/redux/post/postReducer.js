import {
	POST_UPLOAD_REQUEST,
	POST_UPLOAD_SUCCESS,
	POST_UPLOAD_FAILURE,
	GET_ALL_POSTS_REQUEST,
	GET_ALL_POSTS_SUCCESS,
	GET_MY_POSTS_REQUEST,
	GET_MY_POSTS_SUCCESS,
	GET_FAVORITE_POSTS_SUCCESS,
	GET_FAVORITE_POSTS_REQUEST,
	FAVORITE_POST_SUCCESS,
	DELETE_POST_SUCCESS
} from '../post/postTypes';

const initialState = {
	allPosts: [],
	myPosts: [],
	favoritePosts: [],
	loading: false,
	err: null
};

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_POSTS_REQUEST: {
			return { ...state, loading: true };
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
		case GET_FAVORITE_POSTS_REQUEST: {
			return { ...state, loading: true };
		}
		case GET_FAVORITE_POSTS_SUCCESS: {
			return { ...state, favoritePosts: action.payload, loading: false };
		}
		case POST_UPLOAD_REQUEST: {
			return { ...state, loading: true };
		}
		case POST_UPLOAD_SUCCESS: {
			return { ...state, userPosts: action.payload, loading: false, err: null };
		}
		case POST_UPLOAD_FAILURE: {
			return { ...state, loading: false, err: action.payload };
		}
		case FAVORITE_POST_SUCCESS: {
			return {
				...state,
				allPosts: action.payload.allPosts,
				favoritePosts: action.payload.favoritePosts
			};
		}
		case DELETE_POST_SUCCESS: {
			const { allPosts, myPosts } = action.payload;

			return {
				...state,
				allPosts,
				myPosts
			};
		}
		default: {
			return state;
		}
	}
};

export default postReducer;
