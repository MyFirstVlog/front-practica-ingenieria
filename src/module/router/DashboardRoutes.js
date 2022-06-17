import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { NavBar } from "../nav/NavBar";
import { BookingsPage } from "../pages/BookingsPage";
import { GestionPage } from "../pages/GestionPage";
import { SchedulingPage } from "../pages/SchedulingPage";
import { StatsPage } from "../pages/StatsPage";

export const DashboardRoutes = () => {
	return (
		<>
			<NavBar />

			<div className="mt-2">
				<Switch>
					<Route exact path="/" component={GestionPage} />
					<Route exact path="/scheduling" component={SchedulingPage} />
					<Route exact path="/bookings" component={BookingsPage} />
					<Route exact path="/stats" component={StatsPage} />

					<Redirect to="/" />
				</Switch>
			</div>
		</>
	);
};
