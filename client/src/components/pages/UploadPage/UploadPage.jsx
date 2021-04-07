import React, { useState, useRef } from 'react';
import './UploadPage.scss';
import { useSelector, useDispatch } from 'react-redux';
import { postUpload } from '../../../redux/post/postActions';
import { useHistory } from 'react-router';

const UploadPage = () => {
	const [image, setImage] = useState('');
	const [objectURL, setObjectURL] = useState('');

	const post = useSelector((state) => state.post);
	const dispatch = useDispatch();
	const history = useHistory();
	const inputRef = useRef('inputRef');

	const handleBrowseClick = (e) => {
		e.preventDefault();
		inputRef.current.click();
	};

	const handleFileChange = (e) => {
		if (e.target.files.length > 0) {
			setImage(e.target.files[0]);
			setObjectURL(URL.createObjectURL(e.target.files[0]));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(postUpload(image)).then(() => history.replace('/'));
	};

	return (
		<div className='upload-page'>
			{post.loading ? (
				<div className='loading-overlay'>
					<div className='spinner'></div>
				</div>
			) : null}
			<form className='form'>
				<h2>Upload an Image</h2>
				{post.err ? <div className='server-err-box'>{post.err}</div> : null}
				{!image ? (
					<div className='image-preview-empty'>
						<div className='image-preview-empty-actions'>
							<i className='material-icons'>wallpaper</i>
							<span>No file chosen</span>
							<button
								className='button secondary-button'
								onClick={handleBrowseClick}>
								Browse
							</button>
						</div>
					</div>
				) : (
					<div className='image-preview'>
						<img src={objectURL} alt='' />
						<i className='material-icons' onClick={handleBrowseClick}>
							camera_alt
						</i>
					</div>
				)}
				<input
					type='file'
					accept='image/*'
					onChange={handleFileChange}
					ref={inputRef}
				/>
				<button
					disabled={image ? false : true}
					className='button primary-button'
					onClick={handleSubmit}>
					Upload
				</button>
			</form>
		</div>
	);
};

export default UploadPage;
