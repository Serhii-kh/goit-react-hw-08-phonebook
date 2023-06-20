import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addFilterText } from 'redux/FilterSlice';
import { getContacts, getError, getIsLoading } from 'redux/ContactsListSlice';
import { getFilterValue } from 'redux/FilterSlice';
import { fetchContacts } from './api';
import css from '../components/wrapper/wrapper.module.css';

export const App = () => {
	const contacts = useSelector(getContacts);
	const filterValue = useSelector(getFilterValue);
	const isLoading = useSelector(getIsLoading);
	const error = useSelector(getError);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchContacts())
	}, [dispatch])

	const changeFilter = e => {
		const { value } = e.currentTarget;

		dispatch(addFilterText(value));
	};

	const getFilteredContacts = () => {
		const normalizedFilter = filterValue.toLowerCase();

		return contacts.filter(contact =>
			contact.name.toLowerCase().includes(normalizedFilter)
		);
	};

	const filteredContacts = getFilteredContacts();

	return (
		<div className={css.phonebook}>
			<h1>Phonebook</h1>
			<ContactForm />
			<h2>Contacts</h2>
			<Filter changeFilter={changeFilter} />
			{contacts.length > 0 && <ContactsList contacts={filteredContacts} />}
			{error && <h3>{error}</h3>}
			{isLoading && <h3>Loading...</h3>}
		</div>
	);
};
