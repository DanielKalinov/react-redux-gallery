import './App.scss';
import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from './redux/auth/authActions';
import { Switch, Route, Redirect } from 'react-router';
import Header from './components/Header/Header.jsx';
import LandingPage from './components/pages/LandingPage/LandingPage.jsx';
import HomePage from './components/pages/HomePage/HomePage.jsx';
import LoginPage from './components/pages/LoginPage/LoginPage.jsx';
import SignupPage from './components/pages/SignupPage/SignupPage.jsx';
import UploadPage from './components/pages/UploadPage/UploadPage.jsx';
import MyPostsPage from './components/pages/MyPostsPage/MyPostsPage.jsx';
import FavoritesPage from './components/pages/FavoritesPage/FavoritesPage.jsx';

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
					<Switch>
						<Route exact path='/'>
							{auth.isAuthenticated ? <Redirect to='/home' /> : <LandingPage />}
						</Route>
						<Route path='/home' component={HomePage} />
						<Route path='/signup' component={SignupPage} />
						<Route path='/login' component={LoginPage} />
						<Route path='/upload' component={UploadPage} />
						<Route path='/myposts' component={MyPostsPage} />
						<Route path='/favorites' component={FavoritesPage} />
					</Switch>
				</Fragment>
			)}
		</div>
	);
};

export default App;
