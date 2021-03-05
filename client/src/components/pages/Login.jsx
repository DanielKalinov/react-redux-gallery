import React from 'react';

const Login = () => {
	return (
		<div className='login'>
			<form className='form'>
				<h2>Login</h2>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<input type='text' name='email' className='input' />
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input type='text' name='password' className='input' />
				</div>
				<button className='button primary-button'>Log In</button>
			</form>
		</div>
	);
};

export default Login;
