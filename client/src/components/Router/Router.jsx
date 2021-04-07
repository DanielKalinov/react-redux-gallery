import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from '../pages/HomePage/HomePage.jsx';
import LoginPage from '../../components/pages/LoginPage/LoginPage.jsx';
import SignupPage from '../../components/pages/SignupPage/SignupPage.jsx';
import UploadPage from '../../components/pages/UploadPage/UploadPage.jsx';
import PostsPage from '../../components/pages/PostsPage/PostsPage.jsx';

const Router = () => {
	return (
		<Switch>
			<Route
				exact
				path='/'
				render={(props) => <HomePage {...props} postsType='allPosts' />}
			/>
			<Route exact path='/signup' component={SignupPage} />
			<Route exact path='/login' component={LoginPage} />
			<Route exact path='/upload' component={UploadPage} />
			<Route
				exact
				path='/myposts'
				component={(props) => <PostsPage {...props} postsType='myPosts' />}
			/>
			<Route
				exact
				path='/favorites'
				render={(props) => <PostsPage {...props} postsType='favoritePosts' />}
			/>
		</Switch>
	);
};

export default Router;
