export const checkEmail = (email) => {
	let reg = /^([\w_]?)*[\w]+@([\w_]?)*[\w]+\.[a-zA-Z]{2,3}$/;
	return reg.test(email);
};
