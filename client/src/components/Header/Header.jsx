import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
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
		<div>
			<div className='header'>
				<div className='header-container'>
					<div className='header-left'>
						<Link to='/'>Home</Link>
						<Link to='/upload'>Upload</Link>
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
		</div>
	);
};

export default Header;
