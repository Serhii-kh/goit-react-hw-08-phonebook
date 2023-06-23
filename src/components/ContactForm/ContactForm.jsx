import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getContacts } from 'redux/ContactsListSlice';
import { postContact } from 'components/api';
import { toast } from 'react-hot-toast';
import css from '../ContactForm/ContactForm.module.css';

export const ContactForm = () => {
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	const dispatch = useDispatch();
	const contacts = useSelector(getContacts);

	const handleChange = e => {
		const { name, value } = e.currentTarget;
		
		name === 'name' ? setName(value) : setNumber(value)
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (
			contacts.find(
				contact => contact.name.toLowerCase() === name.toLowerCase()
			)
		) {
			toast.error(`${name} is already in contacts!`);
		} else {
			dispatch(postContact({ name, number, })
			)
		}

		setName('');
		setNumber('');
		e.currentTarget.reset();
	};

	return (
		<>
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
					Number
					<input
						type="tel"
						name="number"
						onChange={handleChange}
						value={number}
						title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
					/>
				</label>
				<button type="submit" className={css.submitBtn}>
					Add contact
				</button>
			</form>
		</>
	);
};
