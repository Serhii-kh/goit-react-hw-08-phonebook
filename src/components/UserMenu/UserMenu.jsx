import { deleteToken, logOutThunk } from "components/API/api"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"

export const UserMenu = ({ email }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleLogOut = async () => {
		try {
			await dispatch(logOutThunk()).unwrap()
			deleteToken()
			navigate('/login')
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