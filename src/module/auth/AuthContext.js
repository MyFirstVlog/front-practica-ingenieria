import React from "react";
import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

export const AuthContext = createContext();

const initialState = {
	logged: false,
	email: "",
};

export const AuthProvider = ({ children }) => {
	const [authState, dispatch] = useReducer(authReducer, initialState);

	return (
		<AuthContext.Provider
			value={{
				authState,
				dispatch,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
