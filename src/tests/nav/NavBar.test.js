import React from "react";
import { mount } from "enzyme";
import { MemoryRouter, Router } from "react-router-dom";
import "@testing-library/jest-dom";

import { AuthContext } from "../../module/auth/AuthContext";
import { NavBar } from "../../module/nav/NavBar";

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
			logged: true,
			email: "example1@example.com",
		},
	};
	const wrapper = mount(
		<AuthContext.Provider value={contextValue}>
			<MemoryRouter>
				<Router history={historyMock}>
					<NavBar />
				</Router>
			</MemoryRouter>
		</AuthContext.Provider>
	);

	afterEach(() => {
		jest.clearAllMocks();
	});
	test("should test logout", () => {
		wrapper.find("button").at(1).simulate("click");
		expect(contextValue.dispatch).toHaveBeenCalledWith({
			type: "[logout] Logout",
		});
	});
	test("should test collapse navbar", () => {
		Object.defineProperty(window, "innerHeight", {
			writable: true,
			configurable: true,
			value: 150,
		});

		window.dispatchEvent(new Event("resize"));

		expect(window.innerHeight).toBe(150);

		wrapper.find("button").at(0).simulate("click");
		expect(wrapper).toMatchSnapshot();
	});
});
