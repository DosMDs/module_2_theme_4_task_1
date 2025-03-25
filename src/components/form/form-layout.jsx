import style from "./form.module.css";

export const FormLayout = ({ state, errors, onSubmit, onChange }) => (
	<form className={style.form} onSubmit={onSubmit}>
		<div>
			<input
				name="email"
				type="email"
				placeholder="Почта"
				className={style.input}
				value={state.email}
				onChange={({ target }) => onChange(target)}
			/>
			{errors.email && (
				<span className={style.error}>{errors.email}</span>
			)}
		</div>
		<div>
			<input
				name="password"
				type="password"
				placeholder="Пароль"
				className={style.input}
				value={state.password}
				onChange={({ target }) => onChange(target)}
			/>
			{errors.password && (
				<span className={style.error}>{errors.password}</span>
			)}
		</div>
		<div>
			<input
				name="retryPassword"
				type="password"
				placeholder="Повторите пароль"
				className={style.input}
				value={state.retryPassword}
				onChange={({ target }) => onChange(target)}
			/>
			{errors.retryPassword && (
				<span className={style.error}>{errors.retryPassword}</span>
			)}
		</div>

		<button type="submit">Зарегистрироваться</button>
	</form>
);
