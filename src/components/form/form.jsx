import { useStore } from "../../hooks";
import { checkEmail } from "../../utils";
import { FormLayout } from "./form-layout";

export const Form = () => {
	const { getState, updateState } = useStore();

	const { email, password, retryPassword, error } = getState();

	const onSubmit = (event) => {
		event.preventDefault();
	};

	const onEmailChange = (value) => {
		let newError = null;

		if (!checkEmail(value)) {
			newError =
				"Неверный email. Допустимые символы: буквы, цифры и нижнее подчеркивание.";
		}
		updateState({ email: value });
		updateState({ error: newError });
	};

	return (
		<FormLayout
			email={email}
			password={password}
			retryPassword={retryPassword}
			error={error}
			onSubmit={onSubmit}
			onEmailChange={onEmailChange}
			updateState={updateState}
		/>
	);
};
