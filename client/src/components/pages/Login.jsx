import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
	const initialValues = {
		email: '',
		password: ''
	};

	const onSubmit = (values, onSubmitProps) => {
		onSubmitProps.resetForm();
	};

	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid email address').required('Required'),
		password: Yup.string()
			.min(8, 'Password must be at least 8 characters long')
			.required('Required')
	});

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
			validateOnMount>
			{(formik) => {
				return (
					<Form className='form'>
						<h2>Login</h2>
						<div className='form-group'>
							<label htmlFor='email'>Email</label>
							<Field type='text' name='email' className='input' />
							<ErrorMessage
								name='email'
								component='p'
								className='form-error-message'
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='password'>Password</label>
							<Field type='password' name='password' className='input' />
							<ErrorMessage
								name='password'
								component='p'
								className='form-error-message'
							/>
						</div>
						<button
							type='submit'
							className='button primary-button'
							disabled={!formik.isValid}>
							Log In
						</button>
					</Form>
				);
			}}
		</Formik>
	);
};

export default Login;
