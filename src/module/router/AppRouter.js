import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { PublicRoute } from "./PublicRoutes";
import { AuthContext } from "../auth/AuthContext";
import { PrivateRoute } from "./PrivateRoutes";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
	const { authState } = useContext(AuthContext);

	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute
						isAuthenticated={authState.logged}
						path="/login"
						component={LoginPage}
					/>
					<PrivateRoute
						isAuthenticated={authState.logged}
						path="/"
						component={DashboardRoutes}
					/>
				</Switch>
			</div>
		</Router>
	);
};
