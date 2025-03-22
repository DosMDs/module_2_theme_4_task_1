export const validate = (values, scheme) => {
	const errors = {};

	Object.keys(values).forEach((name) => {
		const rules = scheme[name] || {};
		Object.keys(rules).forEach((rule) => {
			switch (rule) {
				case "required":
					if (!values[name]) {
						errors[name] = rules[rule].message;
					}
					break;
				case "pattern":
					if (!values[name].match(rules[rule].param)) {
						errors[name] = rules[rule].message;
					}
					break;
				case "min":
					if (values[name].length < rules[rule].param) {
						errors[name] = rules[rule].message;
					}
					break;
				case "max":
					if (values[name].length > rules[rule].param) {
						errors[name] = rules[rule].message;
					}
					break;
				case "equalTo":
					if (values[name] !== values[rules[rule].param]) {
						errors[name] = rules[rule].message;
					}
					break;
				default:
					break;
			}
		});
	});

	return errors;
};
