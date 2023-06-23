import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import css from './Register.module.css';
import { getIsAuth, signUpThunk } from 'components/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register = () => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('')
	const dispatch = useDispatch();
	const isAuth = useSelector(getIsAuth)
	const navigate = useNavigate();

	const handleChange = e => {
		const { name, value } = e.currentTarget;

		if (name === 'name') setName(value);
		if (name === 'password') setPassword(value);
		if (name === 'email') setEmail(value);
	};

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(signUpThunk({
			name,
			password,
			email
		}))

		setName('');
		setPassword('');
		setEmail('');
		e.currentTarget.reset();
	};

	useEffect(() => {
		isAuth && navigate('/login')
		isAuth && toast.success('You have successfully signed up!')
	}, [isAuth, navigate])

	return (
		<>
			<h1>Register page</h1>
			<form className={css.ContactForm} onSubmit={handleSubmit}>

				<label>
					Name
					<input
						type="text"
						name="name"
						value={name}
						onChange={handleChange}
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
					/>
				</label>

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
					Sign up
				</button>

			</form>
		</>
	)
}


export default Register;