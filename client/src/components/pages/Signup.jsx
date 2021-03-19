import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/authActions';
import { useHistory } from 'react-router-dom';

const Signup = () => {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const history = useHistory();

	const initialValues = {
		email: '',
		password: ''
	};

	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid email address').required('Required'),
		password: Yup.string()
			.min(8, 'Password must be at least 8 characters long')
			.required('Required')
	});

	const onSubmit = (values, onSubmitProps) => {
		dispatch(signUp(values)).then(() => history.replace('/'));
		onSubmitProps.resetForm();
	};

	return (
		<div>
			{auth.loading ? (
				<div className='loading-overlay'>
					<div className='spinner'></div>
				</div>
			) : null}
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
				validateOnMount>
				{(formik) => {
					return (
						<Form className='form'>
							<h2>Signup</h2>
							{auth.err ? (
								<div className='server-err-box'>{auth.err}</div>
							) : null}
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
								Sign Up
							</button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default Signup;
