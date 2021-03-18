import './App.scss';
import Header from './components/Header/Header.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserData } from './redux/auth/authActions';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserData());
	}, [dispatch]);

	return (
		<div className='app'>
			<Header />
		</div>
	);
};

export default App;
