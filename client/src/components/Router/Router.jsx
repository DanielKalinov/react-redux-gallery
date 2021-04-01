import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import LandingPage from '../../components/pages/LandingPage/LandingPage.jsx';
import LoginPage from '../../components/pages/LoginPage/LoginPage.jsx';
import SignupPage from '../../components/pages/SignupPage/SignupPage.jsx';
import UploadPage from '../../components/pages/UploadPage/UploadPage.jsx';
import PostsPage from '../../components/pages/PostsPage/PostsPage.jsx';

const Router = () => {
	const auth = useSelector((state) => state.auth);

	return (
		<Switch>
			<Route exact path='/'>
				{auth.isAuthenticated ? <Redirect to='/home' /> : <LandingPage />}
			</Route>
			<Route
				path='/home'
				component={(props) => <PostsPage {...props} postsType='allPosts' />}
			/>
			<Route path='/signup' component={SignupPage} />
			<Route path='/login' component={LoginPage} />
			<Route path='/upload' component={UploadPage} />
			<Route
				path='/myposts'
				render={(props) => <PostsPage {...props} postsType='myPosts' />}
			/>
			<Route
				path='/favorites'
				render={(props) => <PostsPage {...props} postsType='favoritePosts' />}
			/>
		</Switch>
	);
};

export default Router;
