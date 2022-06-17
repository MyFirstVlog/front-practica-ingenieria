import { renderHook, act } from "@testing-library/react-hooks";
import React from "react";
import { mount } from "enzyme";
import { useReducer } from "react";
import { AuthContext, AuthProvider } from "../../module/auth/AuthContext";
import { authReducer } from "../../module/auth/authReducer";
import { AppRouter } from "../../module/router/AppRouter";
import { initialState } from "./authReducerMockConstants";

describe("should rest AuthProvider", () => {
	test("should test useReducer hook and go to public routes", () => {
		const { result } = renderHook(() =>
			useReducer(authReducer, initialState.initInput)
		);

		const [, dispatch] = result.current;

		act(() => {
			dispatch(initialState.actionLogout);
		});

		const [authState] = result.current;

		const wrapper = mount(
			<AuthContext.Provider value={{ authState }}>
				<AppRouter />
			</AuthContext.Provider>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find("label").at(0).text()).toBe("Email");
		expect(wrapper.find("label").at(1).text()).toBe("Contraseña");
	});

	test("should test useReducer hook and go to dashboard", () => {
		const { result } = renderHook(() =>
			useReducer(authReducer, initialState.initInput)
		);

		const [, dispatch] = result.current;

		act(() => {
			dispatch(initialState.actionLogin);
		});

		const [authState] = result.current;

		const wrapper = mount(
			<AuthContext.Provider value={{ authState }}>
				<AppRouter />
			</AuthContext.Provider>
		);

		expect(wrapper).toBeDefined();
	});

	test("should test useReducer hook and check auth provider", () => {
		const { result } = renderHook(() =>
			useReducer(authReducer, initialState.initInput)
		);

		const [, dispatch] = result.current;

		act(() => {
			dispatch(initialState.actionLogin);
		});

		const wrapper = mount(
			<AuthProvider>
				<AppRouter />
			</AuthProvider>
		);

		expect(wrapper).toBeDefined();
	});
});
