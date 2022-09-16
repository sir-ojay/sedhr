import React, { useState } from "react";
import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import Checkbox from "../global/Checkbox";
import Router, { useRouter } from "next/router";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { LoginRequest } from "@/types/auth/auth";
import { useLoginMutation } from "@/services/auth";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const SigninForm = () => {
	const router = useRouter();

	const methods = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onChange",
	});

	const {
		formState: { errors, isValid },
	} = methods;

	/* Handle submit */
	const [login, { isLoading }] = useLoginMutation();

	const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
		try {
			const user = await login(data).unwrap();
			toast.success("Login successful");
			// Cookies.set("kadavraUserDetails", JSON.stringify(user));
			// Cookies.set("kadavraToken", user.token);
			router.push("/feed");
		} catch (err: any) {
			toast.error(err.data.message);
		}
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className='space-y-6'>
				<Input
					name='email'
					label='Email Address'
					placeholder='you@sedher.com'
					type='email'
					rules={["required", "email"]}
					// onChange={() => {}}
				/>
				<Input
					name='password'
					// onChange={() => {}}
					label='Password'
					placeholder='password'
					type='password'
					rules={["required"]}
				/>
				<div className='flex justify-between items-center'>
					<Checkbox
						value={true}
						label='Remember me'
						size='md'
						id='rememberMe'
						onChange={() => {}}
					/>
					<Button
						tag='a'
						href='/auth/forgot-password'
						className='text-[#616A6A]'>
						Forgot password
					</Button>
				</div>
				<Button
					theme='primary'
					type='submit'
					// onClick={(event) => {
					// 	event.preventDefault();
					// 	setLoading(true);
					// 	setTimeout(() => {
					// 		Router.push("/feed");
					// 		setLoading(false);
					// 	}, 1500);
					// }}
					disabled={!isValid}
					className='w-full'
					loading={isLoading}>
					Login
				</Button>
				<div className='text-left text-dark-100 font-epilogue'>
					{`Already have an account? `}
					<Button
						tag='a'
						href='/auth/signup?step=1'
						theme='primary'
						className='font-semibold'>
						Sign up
					</Button>
				</div>
				<div className='pb-8' />
			</form>
		</FormProvider>
	);
};

export default SigninForm;
