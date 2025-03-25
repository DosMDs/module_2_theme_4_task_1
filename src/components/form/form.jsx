import { useState } from "react";
import { useStore } from "../../hooks";
import { FormLayout } from "./form-layout";
import { validate } from "../../utils/validate";
import { BASIC_FORM_SCHEME } from "../../constants";

export const Form = () => {
	const { getState, updateState } = useStore();
	const [errors, setErrors] = useState({});

	const state = getState();

	const onSubmit = (event) => {
		event.preventDefault();
		console.log({ ...state });
	};

	const onChange = (target) => {
		updateState(target.name, target.value);
		const newState = { ...state, [target.name]: target.value };
		setErrors(validate(newState, BASIC_FORM_SCHEME));
	};

	return (
		<FormLayout
			state={state}
			errors={errors}
			onSubmit={onSubmit}
			onChange={onChange}
		/>
	);
};
