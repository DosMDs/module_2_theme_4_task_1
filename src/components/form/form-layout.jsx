export const FormLayout = () => (
	<form>
		<input name="email" type="email" placeholder="Почта" />
		<input name="password" type="password" placeholder="Пароль" />
		<input
			name="retry-password"
			type="password"
			placeholder="Повторите пароль"
		/>
		<button>Зарегистрироваться</button>
	</form>
);
