import { types } from "../../constants/types";

export const authReducer = (state, action) => {
	switch (action.type) {
		case types.login:
			return {
				...state,
				logged: true,
				email: action.payload.email,
			};

		case types.logout:
			return {
				...state,
				logged: false,
				email: null,
			};

		default:
			return state;
	}
};
