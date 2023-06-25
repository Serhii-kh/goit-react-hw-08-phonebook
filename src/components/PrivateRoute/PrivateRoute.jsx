import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { getIsLoginned } from "redux/selectors/selectors"

export const PrivateRoute = ({ children }) => {
	const isLoginned = useSelector(getIsLoginned)

	return isLoginned ? children : <Navigate to='/login' />
}