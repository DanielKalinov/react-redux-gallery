import React, { useState, useRef } from 'react';
import './UploadPage.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const UploadPage = () => {
	const [image, setImage] = useState('');

	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const history = useHistory();
	const inputRef = useRef('inputRef');

	const handleBrowseClick = (e) => {
		e.preventDefault();
		inputRef.current.click();
	};

	const handleFileChange = (e) => {
		setImage(URL.createObjectURL(e.target.files[0]));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post('http://localhost:3000/post/upload');
	};

	return (
		<div className='upload-page'>
			{auth.loading ? (
				<div className='loading-overlay'>
					<div className='spinner'></div>
				</div>
			) : null}
			<form className='form'>
				<h2>Upload an Image</h2>
				{!image ? (
					<div className='image-preview-empty'>
						<div className='image-preview-empty-actions'>
							<i className='material-icons'>wallpaper</i>
							<span>No file chosen</span>
							<input
								type='file'
								name='files'
								accept='image/*'
								ref={inputRef}
								value={image}
								onChange={handleFileChange}
							/>
							<button
								className='button secondary-button'
								onClick={handleBrowseClick}>
								Browse
							</button>
						</div>
					</div>
				) : (
					<div className='image-preview'>
						<img src={image} />
					</div>
				)}

				<button className='button primary-button' onClick={handleSubmit}>
					Upload
				</button>
			</form>
		</div>
	);
};

export default UploadPage;
