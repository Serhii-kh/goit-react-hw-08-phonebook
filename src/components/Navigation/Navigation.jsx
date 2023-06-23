import { NavLink } from "react-router-dom";
import css from '../Navigation/Navigation.module.css'
import { useDispatch } from "react-redux";

export const Navigation = () => {
	const setActive = ({ isActive }) => isActive ? 'active-link' : ''
const dispatch = useDispatch()

	return (
		<>
			<header>
				<nav className={css.Navigation}>
					<NavLink to="/" className={setActive}>Register</NavLink>
					<NavLink to="login" className={setActive}>Login</NavLink>
					<NavLink to="contacts" className={setActive}>Contacts</NavLink>
					<button type="submit" onClick={()=>{dispatch()}}>Logout</button>
				</nav>
			</header>
		</>
	)
}