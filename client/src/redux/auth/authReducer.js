import {
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	GET_USER_DATA_REQUEST,
	GET_USER_DATA_SUCCESS,
	GET_USER_DATA_FAILURE
} from './authTypes';

const initialState = {
	isAuthenticated: false,
	userData: null,
	loading: false,
	err: null
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case SIGNUP_REQUEST: {
			return { ...state, loading: true };
		}
		case SIGNUP_SUCCESS: {
			return { ...state, loading: false, err: null };
		}
		case SIGNUP_FAILURE: {
			return { ...state, loading: false, err: action.payload };
		}
		case LOGIN_REQUEST: {
			return { ...state, loading: true };
		}
		case LOGIN_SUCCESS: {
			return {
				isAuthenticated: true,
				userData: action.payload,
				loading: false,
				err: null
			};
		}
		case LOGIN_FAILURE: {
			return { ...state, loading: false, err: action.payload };
		}
		case GET_USER_DATA_REQUEST: {
			return { ...state, loading: true };
		}
		case GET_USER_DATA_SUCCESS: {
			return {
				isAuthenticated: true,
				userData: action.payload,
				loading: false,
				err: null
			};
		}
		case GET_USER_DATA_FAILURE: {
			return { ...state, isAuthenticated: false, loading: false };
		}
		default: {
			return state;
		}
	}
}
