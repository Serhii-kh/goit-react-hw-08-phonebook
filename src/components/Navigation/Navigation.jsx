import { NavLink } from "react-router-dom";
import css from '../Navigation/Navigation.module.css'

export const Navigation = () => {
	const setActive = ({ isActive }) => isActive ? 'active-link' : ''

	return (
		<>
			<header>
				<nav className={css.Navigation}>
					<NavLink to="/" className={setActive}>Register</NavLink>
					<NavLink to="login" className={setActive}>Login</NavLink>
					<NavLink to="contacts" className={setActive}>Contacts</NavLink>
				</nav>
			</header>
		</>
	)
}