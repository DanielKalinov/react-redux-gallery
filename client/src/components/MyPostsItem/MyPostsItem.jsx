import React from 'react';
import './MyPostsItem.scss';

const MyPostItem = (props) => {
	return (
		<div className='my-posts-item'>
			<img
				src={`http://localhost:3000/post/myposts/${props.post._id}`}
				alt=''
			/>
		</div>
	);
};

export default MyPostItem;
