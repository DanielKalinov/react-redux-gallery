import {
	POST_UPLOAD_REQUEST,
	POST_UPLOAD_SUCCESS,
	POST_UPLOAD_FAILURE,
	GET_MY_POSTS_SUCCESS,
} from '../post/postTypes';

const initialState = {
	myPosts: null,
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
		case GET_MY_POSTS_SUCCESS: {
			return { ...state, myPosts: action.payload };
		}
		default: {
			return state;
		}
	}
};

export default postReducer;
