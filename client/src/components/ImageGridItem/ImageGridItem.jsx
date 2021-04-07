import React, { useState, useEffect } from 'react';
import './ImageGridItem.scss';
import { useSelector, useDispatch } from 'react-redux';
import { favoritePost, deletePost } from '../../redux/post/postActions';

const ImageGridItem = (props) => {
	const auth = useSelector((state) => state.auth);
	const [isFavorite, setIsFavorite] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		if (auth.userData && props.post.usersFavorited.includes(auth.userData.id)) {
			setIsFavorite(true);
		} else {
			setIsFavorite(false);
		}
	}, []);

	const handleImageClick = (e) => {
		if (e.target.tagName !== 'I') {
			props.handlePostClick(props.post);
		}
	};

	const handleFavoriteClick = () => {
		setIsFavorite(!isFavorite);
		dispatch(favoritePost(props.post._id));
	};

	const handleDeleteClick = () => {
		dispatch(deletePost(props.post._id));
	};

	return (
		<div className='image-grid-item' onClick={handleImageClick}>
			<img src={`http://localhost:3000/post/${props.post._id}`} alt='' />
			<div className='image-grid-item-overlay'>
				{auth.userData && props.post.author !== auth.userData.username ? (
					<i
						className='material-icons favorite-btn-border'
						onClick={handleFavoriteClick}>
						favorite_border
						<i
							className={`material-icons favorite-btn-filled ${
								isFavorite ? 'visible' : 'hidden'
							}`}>
							favorite
						</i>
					</i>
				) : (
					<i
						className='material-icons delete-button'
						onClick={handleDeleteClick}>
						delete
					</i>
				)}
			</div>
		</div>
	);
};

export default ImageGridItem;
