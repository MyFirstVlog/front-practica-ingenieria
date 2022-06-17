import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../module/hooks/useForm";

describe("should test useForm hook", () => {
	const initialForm = {
		email: "alesmo30@gmail.com",
		password: "123",
	};

	test("should return form by default", () => {
		const { result } = renderHook(() => useForm(initialForm));

		const [values, handleInputChange, reset] = result.current;

		expect(values).toEqual(initialForm);
		expect(typeof handleInputChange).toBe("function");
		expect(typeof reset).toBe("function");
	});

	test("should reset values of the form by executing reset function", () => {
		const { result } = renderHook(() => useForm(initialForm));

		const [, handleInputChange, reset] = result.current;

		const target = {
			target: {
				name: "email",
				value: "alejito30@gmail.com",
			},
		};

		act(() => {
			handleInputChange(target);
		});
		let [values, ,] = result.current;

		expect(values).toEqual({
			...initialForm,
			email: "alejito30@gmail.com",
		});

		act(() => {
			reset();
		});

		[values, ,] = result.current;

		expect(values).toEqual(initialForm);
	});
});
