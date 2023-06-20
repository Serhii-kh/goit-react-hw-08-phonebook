import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
// import { postContact } from 'components/api';
import shortid from 'shortid';
import css from '../ContactForm/ContactForm.module.css';
import { getContacts } from 'redux/ContactsListSlice';
import { postContact } from 'components/api';

export const ContactForm = () => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const dispatch = useDispatch();
	const contacts = useSelector(getContacts);

	const handleChange = e => {
		const { name, value } = e.currentTarget;

		if (name === 'name') setName(value);
		if (name === 'phone') setPhone(value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		const id = shortid.generate();

		if (
			contacts.find(
				contact => contact.name.toLowerCase() === name.toLowerCase()
			)
		) {
			alert(`${name} is already in contacts!`);
		} else {
			dispatch(postContact({
				id,
				name,
				phone,
			}))
		}

		setName('');
		setPhone('');

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
						// pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
					/>
				</label>
				<label>
					Number
					<input
						type="tel"
						name="phone"
						onChange={handleChange}
						value={phone}
						// pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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
