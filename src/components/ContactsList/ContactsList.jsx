import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { deleteContactById } from 'components/api';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import css from '../ContactsList/ContactList.module.css';

export const ContactsList = ({ contacts }) => {
	const dispatch = useDispatch();

	return (
		<ul className={css.contactsList}>
			{contacts.map(({ name, number, id }) => (
				<ContactsListItem key={id} name={name} number={number}>
					<button type="button" onClick={() => dispatch(deleteContactById(id))}>
						Delete
					</button>
				</ContactsListItem>
			))}
		</ul>
	);
};


ContactsList.protoTypes = {
	contacts: PropTypes.array.isRequired,
}
