import css from './LogIn.module.css'
import { useEffect, useState } from 'react';
import { fetchContacts, logInThunk } from 'components/API/api';
import { useDispatch, useSelector} from 'react-redux';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { getIsLoginned } from 'redux/selectors/selectors';

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

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			await dispatch(logInThunk({ password, email, })).unwrap
			setPassword('');
			setEmail('');
			toast.success('You have successfully logged in!')
			fetchContacts()
		} catch (error) {
			console.log(error)
		}
	};

	useEffect(() => {
		isLoginned && navigate('/contacts')
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