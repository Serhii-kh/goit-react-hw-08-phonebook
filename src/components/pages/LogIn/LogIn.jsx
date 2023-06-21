// import { useNavigate } from 'react-router-dom';
import css from './LogIn.module.css'
import { useState } from 'react';
import { logIn } from 'components/api';

const LogIn = () => {
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('')
	// const navigate = useNavigate();


	const handleChange = e => {
		const { name, value } = e.currentTarget;

		if (name === 'password') setPassword(value);
		if (name === 'email') setEmail(value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		logIn({
			password,
			email,
		})
			// .then(() => navigate('/login'))

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

export default LogIn;