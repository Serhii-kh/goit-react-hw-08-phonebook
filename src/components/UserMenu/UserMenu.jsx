import { deleteToken, logOutThunk } from "components/API/api"
import { useDispatch } from "react-redux"

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
			<div>
				<p>{email}</p>
				<button type="button" onClick={handleLogOut}>Logout</button>
			</div>
		</>
	)
}