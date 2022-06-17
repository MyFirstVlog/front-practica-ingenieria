import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { types } from "../../constants/types";
import { AuthContext } from "../auth/AuthContext";

export const NavBar = () => {
	const [isNavCollapsed, setIsNavCollapsed] = useState(true);

	const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

	const history = useHistory();

	const { dispatch } = useContext(AuthContext);

	const handleLogout = () => {
		dispatch({
			type: types.logout,
		});

		history.replace("/login");
	};

	return (
		<nav
			className="navbar navbar-expand-lg navbar-light"
			style={{ backgroundColor: "#e3f2fd" }}
		>
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					Gestionappte
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarColor03"
					aria-controls="navbarColor03"
					aria-expanded={!isNavCollapsed ? true : false}
					aria-label="Toggle navigation"
					onClick={handleNavCollapse}
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className={`${isNavCollapsed ? "collapse" : ""}  navbar-collapse`}
					id="navbarColor03"
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								activeClassName="active"
								className="nav-item nav-link"
								exact
								to="/scheduling"
							>
								Agendamiento
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								activeClassName="active"
								className="nav-item nav-link"
								exact
								to="/bookings"
							>
								Reservaciones
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								activeClassName="active"
								className="nav-item nav-link"
								exact
								to="/stats"
							>
								Estadisticas
							</NavLink>
						</li>
					</ul>
					<div className="d-flex">
						<ul className="navbar-nav mr-auto">
							<span className="nav-item nav-link text-info">Alejandro</span>

							<button className="nav-item nav-link btn" onClick={handleLogout}>
								Logout
							</button>
						</ul>
					</div>
				</div>
			</div>

			{/* poner condicional  abajo para que solo aparezca antes del button y arriba despyues de activar el breakpoint */}
		</nav>
	);
};
