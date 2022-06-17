import { types } from "../../constants/types";

export const initialState = {
	initInput: {
		logged: false,
		email: "",
	},
	actionLogin: {
		type: types.login,
		payload: {
			email: "example1@example.com",
		},
	},
	actionLogout: {
		type: types.logout,
	},
	actionDefault: {
		type: "",
	},
};
