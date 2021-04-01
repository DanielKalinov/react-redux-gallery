import './App.scss';
import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from './redux/auth/authActions';
import Header from './components/Header/Header.jsx';
import Router from './components/Router/Router.jsx';

const App = () => {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserData());
	}, [dispatch]);

	return (
		<div className='app'>
			{auth.loading && (
				<div className='loading-overlay'>
					<div className='spinner'></div>
				</div>
			)}
			{auth.isAuthenticated && (
				<Fragment>
					<Header />
					<div className='header-offset' style={{ height: '59px' }}></div>
				</Fragment>
			)}
			<Router />
		</div>
	);
};

export default App;
