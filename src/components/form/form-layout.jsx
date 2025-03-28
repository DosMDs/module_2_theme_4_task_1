import style from "./form.module.css";

export const FormLayout = ({ register, errors, handleSubmit }) => (
	<form className={style.form} onSubmit={handleSubmit} noValidate>
		<div>
			<input
				name="email"
				type="email"
				placeholder="Почта"
				className={style.input}
				{...register("email")}
			/>
			{errors.email && (
				<span className={style.error}>{errors.email.message}</span>
			)}
		</div>
		<div>
			<input
				name="password"
				type="password"
				placeholder="Пароль"
				className={style.input}
				{...register("password")}
			/>
			{errors.password && (
				<span className={style.error}>{errors.password.message}</span>
			)}
		</div>
		<div>
			<input
				name="retryPassword"
				type="password"
				placeholder="Повторите пароль"
				className={style.input}
				{...register("retryPassword")}
			/>
			{errors.retryPassword && (
				<span className={style.error}>
					{errors.retryPassword.message}
				</span>
			)}
		</div>

		<button type="submit">Зарегистрироваться</button>
	</form>
);
