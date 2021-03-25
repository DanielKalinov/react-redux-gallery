import { POST_UPLOAD_SUCCESS, POST_UPLOAD_FAILURE } from '../post/postTypes';

const initialState = {};

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_UPLOAD_SUCCESS: {
			return state;
		}
		case POST_UPLOAD_FAILURE: {
			return state;
		}
		default: {
			return state;
		}
	}
};

export default postReducer;
