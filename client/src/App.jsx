import './App.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from './redux/auth/authActions';
import { Switch, Route, Redirect } from 'react-router';
import Header from './components/Header/Header.jsx';
import LandingPage from './components/pages/LandingPage/LandingPage.jsx';
import HomePage from './components/pages/HomePage.jsx';
import LoginPage from './components/pages/LoginPage.jsx';
import SignupPage from './components/pages/SignupPage.jsx';
import UploadPage from './components/pages/UploadPage/UploadPage.jsx';

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
			{auth.isAuthenticated && <Header />}
			<Switch>
				<Route exact path='/' component={LandingPage}>
					{auth.isAuthenticated ? <Redirect to='/home' /> : <LandingPage />}
				</Route>
				<Route path='/home' component={HomePage} />
				<Route path='/signup' component={SignupPage} />
				<Route path='/login' component={LoginPage} />
				<Route path='/upload' component={UploadPage} />
			</Switch>
		</div>
	);
};

export default App;
