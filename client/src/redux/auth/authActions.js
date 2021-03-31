import {
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT_REQUEST,
	LOGOUT_SUCCESS,
	GET_USER_DATA_REQUEST,
	GET_USER_DATA_SUCCESS,
	GET_USER_DATA_FAILURE
} from './authTypes';
import axios from 'axios';

export const signUp = (values) => {
	return (dispatch) => {
		return new Promise((resolve) => {
			dispatch(signupRequest());

			axios
				.post('http://localhost:3000/signup', values)
				.then(() => {
					dispatch(signupSuccess());
					resolve();
				})
				.catch((err) => {
					const message = err.response.data;
					dispatch(signupFailure(message));
				});
		});
	};
};

export const logIn = (values) => {
	return (dispatch) => {
		return new Promise((resolve) => {
			dispatch(loginRequest());

			axios
				.post('http://localhost:3000/login', values)
				.then((res) => {
					const token = res.data.token;
					const userData = res.data.userData;

					localStorage.setItem('token', token);
					dispatch(loginSuccess(userData));
					resolve();
				})
				.catch((err) => {
					if (err.response.status === 401) {
						dispatch(loginFailure('Wrong email or password'));
					} else {
						dispatch(loginFailure('Something went wrong'));
					}
				});
		});
	};
};

export const logOut = () => {
	return (dispatch) => {
		dispatch(logoutRequest());

		return new Promise((resolve) => {
			axios
				.post('http://localhost:3000/logout')
				.then(() => {
					localStorage.removeItem('token');
					dispatch(logoutSuccess());
					resolve();
				})
				.catch((err) => console.log(err));
		});
	};
};

export const getUserData = () => {
	return (dispatch) => {
		dispatch(getUserDataRequest());
		return new Promise((resolve) => {
			axios
				.get('http://localhost:3000/userdata', {
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`
					}
				})
				.then((res) => {
					const userData = res.data;
					dispatch(getUserDataSuccess(userData));
					resolve();
				})
				.catch(() => {
					dispatch(getUserDataFailure());
				});
		});
	};
};

export const signupRequest = () => {
	return {
		type: SIGNUP_REQUEST
	};
};

export const signupSuccess = (user) => {
	return {
		type: SIGNUP_SUCCESS,
		payload: user
	};
};

export const signupFailure = (err) => {
	return {
		type: SIGNUP_FAILURE,
		payload: err
	};
};

export const loginRequest = () => {
	return {
		type: LOGIN_REQUEST
	};
};

export const loginSuccess = (userData) => {
	return {
		type: LOGIN_SUCCESS,
		payload: userData
	};
};

export const loginFailure = (err) => {
	return {
		type: LOGIN_FAILURE,
		payload: err
	};
};

export const logoutRequest = () => {
	return {
		type: LOGOUT_REQUEST
	};
};

export const logoutSuccess = () => {
	return {
		type: LOGOUT_SUCCESS
	};
};

export const getUserDataRequest = () => {
	return {
		type: GET_USER_DATA_REQUEST
	};
};

export const getUserDataSuccess = (userData) => {
	return {
		type: GET_USER_DATA_SUCCESS,
		payload: userData
	};
};

export const getUserDataFailure = () => {
	return {
		type: GET_USER_DATA_FAILURE
	};
};
