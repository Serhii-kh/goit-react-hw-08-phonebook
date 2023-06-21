import { Navigation } from "components/Navigation/Navigation"
import { Wrapper } from "components/Wrapper/Wrapper"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"

const Layout = () => {
	return (
		<>
			<Wrapper>
				<Navigation />
				<Suspense fallback={<div>Loading...</div>}>
					<Outlet />
				</Suspense>
			</Wrapper>
		</>
	)
}

export default Layout;