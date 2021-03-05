import React from 'react';

const Signup = () => {
	return (
		<div className='signup'>
			<form className='form'>
				<h2>Signup</h2>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<input type='text' name='email' className='input' />
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input type='text' name='password' className='input' />
				</div>
				<button className='button primary-button'>Sign Up</button>
			</form>
		</div>
	);
};

export default Signup;
