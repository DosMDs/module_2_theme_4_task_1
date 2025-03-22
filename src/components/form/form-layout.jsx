export const FormLayout = ({ state, errors, onSubmit, onChange }) => (
	<form onSubmit={onSubmit}>
		<div>
			<input
				name="email"
				type="email"
				placeholder="Почта"
				value={state.email}
				onChange={({ target }) => onChange(target)}
			/>
			{errors.email && <span>{errors.email}</span>}
		</div>
		<div>
			<input
				name="password"
				type="password"
				placeholder="Пароль"
				value={state.password}
				onChange={({ target }) => onChange(target)}
			/>
			{errors.password && <span>{errors.password}</span>}
		</div>
		<div>
			<input
				name="retryPassword"
				type="password"
				placeholder="Повторите пароль"
				value={state.retryPassword}
				onChange={({ target }) => onChange(target)}
			/>
			{errors.retryPassword && <span>{errors.retryPassword}</span>}
		</div>

		<button type="submit">Зарегистрироваться</button>
	</form>
);
