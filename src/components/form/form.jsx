import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASIC_FORM_SCHEME } from "../../constants";
import { FormLayout } from "./form-layout";

export const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: { email: "", password: "", retryPassword: "" },
		resolver: yupResolver(BASIC_FORM_SCHEME),
	});

	const sendData = (formData) => {
		console.log(formData);
	};

	return (
		<FormLayout
			register={register}
			errors={errors}
			handleSubmit={handleSubmit(sendData)}
		/>
	);
};
