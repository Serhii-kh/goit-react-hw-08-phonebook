import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
// import Layout from "../components/Layout/Layout";
// import NotFound from "./pages/NotFound/Notfound";
const Register = lazy(() => import("../components/pages/Register/Register"));
const Contacts = lazy(() => import("../components/pages/Contacts/Contacts"));
const LogIn = lazy(() => import("../components/pages/LogIn/LogIn"));

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Register />} />
				<Route path="/login" element={<LogIn />} />
				<Route path="/contacts" element={<Contacts />} />
				{/* <Route path="*" element={<NotFound />} /> */}
			</Routes>
		</>
	);
};
