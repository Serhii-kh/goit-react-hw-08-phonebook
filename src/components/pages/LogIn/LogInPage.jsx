// import { useNavigate } from 'react-router-dom';
import css from './LogIn.module.css'
import { useState } from 'react';
import { logInThunk } from 'components/api';
import { useDispatch } from 'react-redux';

const LogInPage = () => {
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const dispatch = useDispatch();
	// const navigate = useNavigate();


	const handleChange = e => {
		const { name, value } = e.currentTarget;
		name === 'password' ? setPassword(value) : setEmail(value);
	};

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(logInThunk({ password, email }))

		// logIn({
		// 	password,
		// 	email,
		// })

		setPassword('');
		setEmail('');

		e.currentTarget.reset();
	};

	return (
		<>
			<h1>Login page</h1>
			<form className={css.ContactForm} onSubmit={handleSubmit}>
				<label>
					Email
					<input
						type="email"
						name="email"
						onChange={handleChange}
						value={email}
						required
					/>
				</label>
				<label>
					Password
					<input
						type="password"
						name="password"
						onChange={handleChange}
						value={password}
						required
					/>
				</label>

				<button type="submit" className={css.submitBtn}>
					Login
				</button>
			</form>
		</>
	)
}

export default LogInPage;