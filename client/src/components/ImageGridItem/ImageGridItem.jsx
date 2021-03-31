import React, { useState, useEffect } from 'react';
import './ImageGridItem.scss';
import { useSelector, useDispatch } from 'react-redux';
import { favoritePost } from '../../redux/post/postActions';

const ImageGridItem = (props) => {
	const auth = useSelector((state) => state.auth);
	const [isFavorite, setIsFavorite] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		if (props.post.usersFavorited.includes(auth.userData.id)) {
			setIsFavorite(true);
		} else {
			setIsFavorite(false);
		}
	}, [auth.userData.id, props.post.usersFavorited]);

	const handleImageClick = (e) => {
		if (e.target.tagName !== 'I') {
			props.handlePostClick(props.post);
		}
	};

	const handleFavoriteClick = () => {
		setIsFavorite(!isFavorite);
		dispatch(favoritePost(props.post._id));
	};

	return (
		<div className='image-grid-item' onClick={handleImageClick}>
			<img src={`http://localhost:3000/post/${props.post._id}`} alt='' />
			<div className='image-grid-item-overlay'>
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
			</div>
		</div>
	);
};

export default ImageGridItem;
