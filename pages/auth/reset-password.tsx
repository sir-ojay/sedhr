import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import AuthLayout from "@/layouts/AuthLayout";
import {
	useForgotPasswordMutation,
	useResetPasswordMutation,
} from "@/services/auth";
import {
	ForgotPasswordRequest,
	ForgotPasswordResponse,
	ResetPasswordRequest,
	ResetPasswordResponse,
} from "@/types/auth/auth";
import { useRouter } from "next/router";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ResetPasswordPage = () => {
	const router = useRouter();

	const methods = useForm({
		defaultValues: {
			password: "",
			confirmpassword: "",
		},
		mode: "onChange",
	});

	const {
		formState: { errors, isValid },
	} = methods;

	const [resetPassword, { isLoading }] = useResetPasswordMutation();

	const onSubmit: SubmitHandler<ResetPasswordRequest | any> = async (
		data: any
	) => {
		try {
			const body = {
				password: data.password,
				confirmPassword: data.confirmpassword,
			};
			const { message } = (await resetPassword({
				body,
				token: router.query.token,
			} as any).unwrap()) as ResetPasswordResponse;

			toast.success(message);
			console.log(message);
			router.push("/auth/signin");
		} catch (err: any) {
			toast.error(err?.data?.error);
		}
	};
	return (
		<AuthLayout title='Sedher | Forgot password'>
			<section className='w-full md:w-[408px] mx-auto mt-10 md:mt-[90px] text-center'>
				<h1 className='font-semibold text-[32px] leading-[120%] text-dark-900 mb-2 font-clash'>
					Reset your password
				</h1>
				<p className='font-epilogue font-medium text-sm md:text-lg leading-[160%] text-dark-100 mb-6'>
					your new password must be different from previous used passwords
				</p>
				<p className='font-epilogue font-medium text-sm leading-[160%] text-primary mb-6'>
					The Create Password field must have an uppercase letter, a lowercase
					letter, a special character and at least 8 digits.
				</p>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} className='space-y-6'>
						<Input
							label='Password'
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
							Reset Password
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
			</section>
		</AuthLayout>
	);
};

export default ResetPasswordPage;
