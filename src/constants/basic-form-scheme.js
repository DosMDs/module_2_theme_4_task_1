export const BASIC_FORM_SCHEME = {
	email: {
		required: {
			message: "Поле обязательно для заполнения.",
		},
		pattern: {
			param: /\S+@\S+\.\S+/,
			message: "Неправильный формат email адреса.",
		},
	},
	password: {
		required: {
			message: "Поле обязательно для заполнения.",
		},
		min: {
			param: 6,
			message: "Пароль должен быть не менее 6 символов.",
		},
		max: {
			param: 30,
			message: "Пароль должен быть не более 30 символов.",
		},
	},
	retryPassword: {
		required: {
			message: "Поле обязательно для заполнения.",
		},
		equalTo: {
			param: "password",
			message: "Пароли не совпадают.",
		},
	},
};
