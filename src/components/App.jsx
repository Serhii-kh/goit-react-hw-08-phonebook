import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "../components/Layout/Layout";
import { Toaster } from "react-hot-toast";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { PublicRoute } from "./PublicRoute/PublicRoute";
const Register = lazy(() => import("../components/pages/Register/Register"));
const Contacts = lazy(() => import("../components/pages/Contacts/Contacts"));
const LogInPage = lazy(() => import("../components/pages/LogIn/LogInPage"));
const NotFound = lazy(()=> import("../components//pages/NotFound/Notfound"))

export const App = () => {
	return (
		<>
			<Toaster gutter={20} toastOptions={{ duration: 1200, } } />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<PublicRoute>
						<Register />
					</PublicRoute>} />
					<Route path="/login" element={<PublicRoute>
						<LogInPage />
					</PublicRoute>} />
					<Route path="/contacts" element={<PrivateRoute>
						<Contacts />
					</PrivateRoute>} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
};
