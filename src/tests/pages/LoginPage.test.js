import React from "react";
import { mount } from "enzyme";
import { MemoryRouter, Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { AuthContext } from "../../module/auth/AuthContext";
import { LoginPage } from "../../module/pages/LoginPage";

describe("should test NavBar component", () => {
	const historyMock = {
		push: jest.fn(),
		replace: jest.fn(),
		location: {},
		listen: jest.fn(),
		createHref: jest.fn(),
	};

	const contextValue = {
		dispatch: jest.fn(),
		authState: {
			logged: false,
			email: "",
		},
	};
	const wrapper = mount(
		<AuthContext.Provider value={contextValue}>
			<MemoryRouter>
				<Router history={historyMock}>
					<LoginPage />
				</Router>
			</MemoryRouter>
		</AuthContext.Provider>
	);

	afterEach(() => {
		jest.clearAllMocks();
	});
	test("should test LoginPage", () => {
		expect(wrapper).toBeDefined();
		expect(wrapper).toMatchSnapshot();
	});

	test("should test login submit", () => {
		wrapper.find("input[name=\"email\"]").simulate("change", {
			target: {
				name: "email",
				value: "milena@cidenet.com",
			},
		});

		wrapper.find("input[name=\"password\"]").simulate("change", {
			target: {
				name: "password",
				value: "123456",
			},
		});

		wrapper.find("form").at(0).prop("onSubmit")({
			preventDefault() {},
		});

		expect(contextValue.dispatch).toHaveBeenCalledWith({
			payload: { email: "milena@cidenet.com" },
			type: "[login] Login",
		});
	});
});
