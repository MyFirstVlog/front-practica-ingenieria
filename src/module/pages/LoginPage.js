import React from 'react';
// import { types } from '../../constants/types';
// import { AuthContext } from '../auth/AuthContext';
// import { useForm } from '../hooks/useForm';
import './style.css';

export const LoginPage = () => {
	/*const [available, setAvailable] = useState(true);
	const [values, handleInputChange] = useForm({
		email: '',
		password: '',
	});
	const { dispatch } = useContext(AuthContext);

	const onSubmit = (e) => {
		e.preventDefault();
		if (values.email && values.password) {
			dispatch({
				type: types.login,
				payload: {
					email: values.email,
				},
			});
		}
	};

	useEffect(() => {
		if (values.email && values.password) {
			setAvailable(false);
		}
	}, [values]);*/

	return (
		<div className="bcg-login">
			<div className="img-test-cidenet">
				<div className="primer-div">
					<div className="row">
						<div className="col center-items">
							<img
								src="https://res.cloudinary.com/dpp07uuh5/image/upload/v1655347814/atomo-logo_2x_k5gsej.png"
								alt="cidenet"
								className="img-cidenet"
							></img>
						</div>
					</div>
				</div>
				<div className="segundo-div">
					{/* <div className="row title-gestionappte">
						<div className="col center-items">Para nuestros colaboradores</div>
					</div> */}
					<div className="row title-gestionappte">
						<div className="row">
							<div className="col center-items">
								<img
									src="https://res.cloudinary.com/dpp07uuh5/image/upload/v1655439104/atomo-logogestionappte_2x_y4ljlf.png"
									alt="cidenet"
									className="gestionappte-cidenet"
									style={{ maxWidth: '55%' }}
								></img>
							</div>
						</div>
						<div className="row">
							<div className="col center-items font-size-large">
								<span>Para nuestros colaboradores</span>
							</div>
						</div>
						{/* <div className="col">hola mundo</div> */}
					</div>
					<div className=" row title-google-login">
						<div className="row">
							<div className="col font-size-large margin-bottom">
								<strong className="white-color">Iniciar sesión</strong>
							</div>
						</div>
						<div className="row">
							<div className="col margin-bottom">
								<button className="btn btn-login rounded-pill">
									<div className="row">
										<div className="col ">
											<i className="fa-brands fa-google"></i> |
											<strong> INICIA SESIÓN CON GOOGLE</strong>
										</div>
									</div>
								</button>
							</div>
						</div>
						<div className="row">
							<div className="col margin-bottom white-color">
								<span>Ingresa con el correo corporativo</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// <div className="mt-5 card form-container">
// 	<div className="form-header text-center">
// 		<img
// 			src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ltgilmylvmrd2mnrsjem"
// 			alt="cidenet"
// 			className="img-cidenet"
// 		/>
// 	</div>
// 	<div className="card-body">
// 		<form onSubmit={onSubmit}>
// 			<div className="mb-4">
// 				<label htmlFor="exampleInputEmail1" className="form-label">
// 					Email
// 				</label>
// 				<input
// 					type="email"
// 					className="form-control"
// 					id="exampleInputEmail1"
// 					aria-describedby="emailHelp"
// 					name="email"
// 					onChange={handleInputChange}
// 				/>
// 			</div>
// 			<div className="mb-4">
// 				<label htmlFor="exampleInputPassword1" className="form-label">
// 					Contraseña
// 				</label>
// 				<input
// 					type="password"
// 					className="form-control"
// 					id="exampleInputPassword1"
// 					name="password"
// 					onChange={handleInputChange}
// 				/>
// 			</div>
// 			<div className="text-center">
// 				<button
// 					type="submit"
// 					className="btn btn-primary mb-2 rounded-pill"
// 					disabled={available}
// 				>
// 					<span style={{ marginRight: '7px' }}>
// 						<i className="fa-brands fa-google"></i>
// 					</span>
// 					INICIA SESIÓN CON GOOGLE
// 				</button>
// 			</div>
// 		</form>

{
	/* <div className="auth__social-networks">
					<div className="google-btn">
						<div className="google-icon-wrapper">
							<img
								className="google-icon"
								src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
								alt="google button"
							/>
						</div>
						<p className="btn-text">
							<b>Sign in with google</b>
						</p>
					</div>
				</div> */
}

{
	/* <div className='auth-testing'>

				</div> */
}
{
	/* <h5 className="card-title">Special title treatment</h5>
				<p className="card-text">
					With supporting text below as a natural lead-in to additional content.
				</p>
				<button onClick={onClick} className="btn btn-primary">
					Go somewhere
				</button> */
}

{
	/* </div>
		</div> */
}
