import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
	const auth = useSelector((state) => state.auth);

	return (
		<div>
			{auth.loading ? (
				<div className='loading-overlay'>
					<div className='spinner'></div>
				</div>
			) : (
				'Home'
			)}
		</div>
	);
};

export default Home;
