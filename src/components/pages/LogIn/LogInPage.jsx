import { useNavigate } from 'react-router-dom';
import css from './LogIn.module.css'
import { useEffect, useState } from 'react';
import { getIsLoginned, logInThunk } from 'components/api';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

const LogInPage = () => {
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isLoginned = useSelector(getIsLoginned)

	const handleChange = e => {
		const { name, value } = e.currentTarget;
		name === 'password' ? setPassword(value) : setEmail(value);
	};

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(logInThunk({ password, email, }))

		setPassword('');
		setEmail('');

		e.currentTarget.reset();
	};

	useEffect(() => {
		isLoginned && navigate('/contacts')
		isLoginned && toast.success('You have successfully logged in!')
	}, [isLoginned, navigate])

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