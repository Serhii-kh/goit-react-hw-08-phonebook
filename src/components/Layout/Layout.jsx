import { Navigation } from "components/Navigation/Navigation"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"

const Layout = () => {
	return (
		<>
				<Navigation />
				<Suspense fallback={<div>Loading...</div>}>
					<Outlet />
				</Suspense>
		</>
	)
}

export default Layout;