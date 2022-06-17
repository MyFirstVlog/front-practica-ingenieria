import { authReducer } from "../../module/auth/authReducer";
import { initialState } from "./authReducerMockConstants";

describe("should test auth reducer", () => {
	test("should return the default state", () => {
		const state = authReducer(
			initialState.initInput,
			initialState.actionDefault
		);
		expect(state).toBe(initialState.initInput);
	});

	test("should logout and return false logged and null email", () => {
		const state = authReducer(
			{
				logged: true,
				email: "example1@example.com",
			},
			initialState.actionLogout
		);

		expect(state.logged).toBe(false);
		expect(state.email).toBeNull();
	});

	test("should login and return an active logged user", () => {
		const state = authReducer(initialState.initInput, initialState.actionLogin);

		expect(state.logged).toBeDefined();
		expect(state.email).toBe("example1@example.com");
	});
});
