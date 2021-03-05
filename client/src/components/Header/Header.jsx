import './Header.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import Home from '../pages/Home.jsx';

const Header = () => {
	return (
		<Router>
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
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/signup'>
					<Signup />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};

export default Header;
