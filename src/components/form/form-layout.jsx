export const FormLayout = ({
	email,
	password,
	retryPassword,
	error,
	onSubmit,
	onEmailChange,
	updateState,
}) => (
	<form onSubmit={onSubmit}>
		{error && <div>{error}</div>}
		<input
			name="email"
			type="email"
			placeholder="Почта"
			value={email}
			onChange={({ target }) => onEmailChange(target.value)}
		/>
		<input
			name="password"
			type="password"
			placeholder="Пароль"
			value={password}
			onChange={({ target }) => updateState("password", target.value)}
		/>
		<input
			name="retry-password"
			type="password"
			placeholder="Повторите пароль"
			value={retryPassword}
			onChange={({ target }) =>
				updateState("retryPassword", target.value)
			}
		/>
		<button type="submit">Зарегистрироваться</button>
	</form>
);
