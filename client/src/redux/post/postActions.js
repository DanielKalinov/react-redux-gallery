import { POST_UPLOAD_SUCCESS, POST_UPLOAD_FAILURE } from './postTypes';
import axios from 'axios';

export const postUpload = (image) => {
	return (dispatch) => {
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
					resolve();
				})
				.catch((err) => {
					dispatch(postUploadFailure);
				});
		});
	};
};

export const postUploadSuccess = () => {
	return {
		type: POST_UPLOAD_SUCCESS
	};
};

export const postUploadFailure = () => {
	return {
		type: POST_UPLOAD_FAILURE
	};
};
