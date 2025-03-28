import * as yup from "yup";

export const formScheme = yup.object().shape({
	email: yup
		.string()
		.required("Поле обязательно для заполнения.")
		.email("Неправильный формат email адреса."),
	password: yup
		.string()
		.required("Поле обязательно для заполнения.")
		.min(6, "Пароль должен быть не менее 6 символов.")
		.max(30, "Пароль должен быть не более 30 символов."),
	retryPassword: yup
		.string()
		.required("Поле обязательно для заполнения.")
		.oneOf([yup.ref("password")], "Пароли не совпадают."),
});
