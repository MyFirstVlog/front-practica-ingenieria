import React from "react";
import { mount } from "enzyme";
import { MemoryRouter, Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { AuthContext } from "../../module/auth/AuthContext";
import { BookingsPage } from "../../module/pages/BookingsPage";

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
					<BookingsPage />
				</Router>
			</MemoryRouter>
		</AuthContext.Provider>
	);

	afterEach(() => {
		jest.clearAllMocks();
	});
	test("should test BookingsPage", () => {
		expect(wrapper).toBeDefined();
		expect(wrapper).toMatchSnapshot();
	});
});
