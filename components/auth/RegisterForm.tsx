import { useRegisterMutation } from "@/services/auth";
import { RegisterRequest } from "@/types/auth/auth";
import { useRouter } from "next/router";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Button from "../global/Button";
import Input from "../global/Input";

const RegisterForm = () => {
	const router = useRouter();

	const { email, firstName, lastName } = router.query;

	const methods = useForm({
		defaultValues: {
			password: "",
			confirmpassword: "",
		},
		mode: "onChange",
	});

	const {
		formState: { isValid, errors },
	} = methods;

	/* Handle submit */
	const [register, { isLoading }] = useRegisterMutation();

	const onSubmit: SubmitHandler<RegisterRequest | any> = async (data) => {
		try {
			const body = {
				firstName: firstName?.toString() || ("" as string),
				lastName: lastName?.toString() || ("" as string),
				email: email?.toString() || ("" as string),
				password: data.password as string,
				confirmpassword: data.confirmpassword as string,
			};
			const user = await register(body).unwrap();
			toast.success(user.message);
			router.push({
				pathname: "/auth/signin",
			});
		} catch (err: any) {
			toast.error(err?.data?.error);
		}
	};

	return (
		<div>
			<h1 className='font-semibold text-[32px] leading-[120%] text-dark-900 font-clash'>
				password
			</h1>
			<p className='font-epilogue font-medium text-lg leading-[160%] text-dark-100 mb-6'>
				Create your password
			</p>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} className='space-y-6'>
					<Input
						label='Create Password'
						placeholder='Enter your Password'
						type='password'
						name='password'
						rules={["required", "password"]}
					/>
					<Input
						label='Confirm Password'
						placeholder='Enter your Confirm Password'
						type='password'
						name='confirmpassword'
						rules={["required", "confirmPassword"]}
					/>
					<Button
						theme='primary'
						type='submit'
						className='w-full'
						disabled={!isValid}
						loading={isLoading}>
						Create Account
					</Button>
					<div className='text-left text-dark-100 font-epilogue'>
						{`Already have an account? `}
						<Button
							tag='a'
							href='/auth/signin'
							theme='primary'
							className='font-semibold'>
							Sign in
						</Button>
					</div>
				</form>
			</FormProvider>
		</div>
	);
};

export default RegisterForm;
