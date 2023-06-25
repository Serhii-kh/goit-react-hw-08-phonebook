import { deleteToken, logOutThunk } from "components/API/api"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"

export const UserMenu = ({ email }) => {
	const dispatch = useDispatch()
const navigate = useNavigate()
	const handleLogOut = () => {
		dispatch(logOutThunk())
		deleteToken()
		navigate('/login')
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