import './Header.scss';
import { Switch, Route, Link } from 'react-router-dom';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import Home from '../pages/Home.jsx';

const Header = () => {
	return (
		<div>
			<div className='header'>
				<div className='header-container'>
					<div className='header-left'>
						<Link to='/'>Home</Link>
					</div>
					<div className='header-right'>
						<Link to='/signup' className='button primary-button'>
							Sign Up
						</Link>
						<Link to='/login' className='button secondary-button'>
							Log In
						</Link>
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
