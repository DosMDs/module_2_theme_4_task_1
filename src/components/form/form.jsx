import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formScheme } from "../../schemes";
import { FormLayout } from "./form-layout";

export const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: { email: "", password: "", retryPassword: "" },
		resolver: yupResolver(formScheme),
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
