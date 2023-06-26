import { NavLink } from "react-router-dom";
import { getUserEmail } from "redux/selectors/selectors";
import { useSelector } from "react-redux";
import { UserMenu } from "components/UserMenu/UserMenu";
import css from '../Navigation/Navigation.module.css'

export const Navigation = () => {
	const setActive = ({ isActive }) => isActive ? 'active-link' : ''
	const email = useSelector(getUserEmail)

	return (
		<>
			<header>
				<nav className={css.Navigation}>
					<NavLink to="/" className={setActive}>Register</NavLink>
					<NavLink to="login" className={setActive}>Login</NavLink>
					<NavLink to="contacts" className={setActive}>Contacts</NavLink>
				</nav>
				{email && <UserMenu email={email} />}
			</header>
		</>
	)
}