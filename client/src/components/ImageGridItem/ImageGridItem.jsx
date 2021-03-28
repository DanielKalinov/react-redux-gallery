import React from 'react';
import './ImageGridItem.scss';

const ImageGridItem = (props) => {
	const handleClick = () => {
		props.handlePostClick(props.post);
	};

	return (
		<div className='image-grid-item' onClick={handleClick}>
			<img src={`http://localhost:3000/post/${props.post._id}`} alt='' />
		</div>
	);
};

export default ImageGridItem;
