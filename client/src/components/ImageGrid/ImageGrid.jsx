import React, { useState } from 'react';
import './ImageGrid.scss';
import { useSelector } from 'react-redux';
import ImageGridItem from '../ImageGridItem/ImageGridItem.jsx';

const ImageGrid = (props) => {
	const [activePost, setActivePost] = useState(null);
	const post = useSelector((state) => state.post);

	const handlePostClick = (post) => {
		setActivePost(post);
		document.body.style.overflow = 'hidden';
	};

	const handleOverlayClick = (e) => {
		if (e.target.className === 'active-post-overlay') {
			setActivePost(null);
			document.body.style.overflow = 'visible';
		}
	};

	const imageGridList = () => {
		return post[props.postsType].map((post) => (
			<li key={post._id}>
				<ImageGridItem post={post} handlePostClick={handlePostClick} />
			</li>
		));
	};

	return (
		<div className='image-grid'>
			{activePost && (
				<div className='active-post-overlay' onClick={handleOverlayClick}>
					<div className='active-post'>
						<img src={`http://localhost:3000/post/${activePost._id}`} alt='' />
					</div>
				</div>
			)}
			<ul className='image-grid-list'>
				{post[props.postsType] && imageGridList()}
			</ul>
		</div>
	);
};

export default ImageGrid;
