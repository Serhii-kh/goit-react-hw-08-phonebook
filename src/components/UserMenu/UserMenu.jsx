import { deleteToken, logOutThunk } from "components/API/api"
import { useDispatch } from "react-redux"
import css from './UserMenu.module.css'

export const UserMenu = ({ email }) => {
	const dispatch = useDispatch()

	const handleLogOut = async () => {
		try {
			await dispatch(logOutThunk()).unwrap()
			deleteToken()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<div className={css.UserMenu}>
				<p>{email}</p>
				<button type="button" onClick={handleLogOut}>Logout</button>
			</div>
		</>
	)
}