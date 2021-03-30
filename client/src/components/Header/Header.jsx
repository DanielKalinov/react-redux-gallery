import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authActions';
import { useHistory } from 'react-router-dom';

const Header = () => {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const history = useHistory();

	const onLogout = () => {
		dispatch(logOut()).then(() => history.replace('/'));
	};

	return (
		<div className='header'>
			<div className='header-container'>
				<div className='header-left'>
					<NavLink activeClassName='header-left-active' exact to='/home'>
						Home
					</NavLink>
					<NavLink activeClassName='header-left-active' exact to='/upload'>
						Upload
					</NavLink>
					<NavLink activeClassName='header-left-active' exact to='/myposts'>
						My Posts
					</NavLink>
				</div>
				<div className='header-right'>
					<span className='header-right-username'>
						{auth.userData.username}
					</span>
					<button className='button secondary-button' onClick={onLogout}>
						Log Out
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
