import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "../components/Layout/Layout";
import NotFound from "./pages/NotFound/Notfound";
import { Toaster } from "react-hot-toast";
const Register = lazy(() => import("../components/pages/Register/Register"));
const Contacts = lazy(() => import("../components/pages/Contacts/Contacts"));
const LogInPage = lazy(() => import("../components/pages/LogIn/LogInPage"));

export const App = () => {
	return (
		<>
			<Toaster gutter={20} toastOptions={{ duration: 1000, } } />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Register />} />
					<Route path="/login" element={<LogInPage />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
};
