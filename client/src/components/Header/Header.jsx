import React, { Fragment } from 'react';
import './Header.scss';
import { Switch, Route, Link } from 'react-router-dom';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import Home from '../pages/Home.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authActions';

const Header = () => {
	const { isAuthenticated } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	return (
		<div>
			<div className='header'>
				<div className='header-container'>
					<div className='header-left'>
						<Link to='/'>Home</Link>
					</div>
					<div className='header-right'>
						{!isAuthenticated ? (
							<Fragment>
								<Link to='/signup' className='button primary-button'>
									Sign Up
								</Link>
								<Link to='/login' className='button secondary-button'>
									Log In
								</Link>
							</Fragment>
						) : (
							<button
								className='button secondary-button'
								onClick={() => dispatch(logOut())}>
								Log Out
							</button>
						)}
					</div>
				</div>
			</div>
			<Switch>
				<Route path='/login' component={Login}></Route>
				<Route path='/signup' component={Signup}></Route>
				<Route path='/' component={Home}></Route>
			</Switch>
		</div>
	);
};

export default Header;
