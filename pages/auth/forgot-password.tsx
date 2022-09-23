import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import { FormProvider, useForm } from "react-hook-form";
import AuthLayout from "@/layouts/AuthLayout";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { checkAuthentication } from "hoc/checkAuthentication";

const ForgotPasswordPage: NextPage = () => {
	const methods = useForm({
		defaultValues: {
			email: "",
		},
		mode: "onChange",
	});

	const {
		formState: { errors, isValid },
	} = methods;

	return (
		<AuthLayout title='Sedher | Forgot password'>
			<section className='w-full md:w-[408px] mx-auto mt-10 md:mt-[90px] text-center'>
				<h1 className='font-semibold text-[32px] leading-[120%] text-dark-900 mb-2 font-clash'>
					Forgot Password
				</h1>
				<p className='font-epilogue font-medium text-sm md:text-lg leading-[160%] text-dark-100 mb-6'>
					Enter the email associated with your account and we’ll send an email
					with instructions to reset your Password
				</p>

				<FormProvider {...methods}>
					<form className='space-y-6'>
						<Input
							label='Email Address'
							placeholder='Enter your Email Address'
							type='email'
							rules={["required", "email"]}
							onChange={() => {}}
						/>
						<Button theme='primary' disabled={isValid} className='w-full'>
							Send Instruction
						</Button>
						<div className='text-left text-dark-100 font-epilogue'>
							{`Remembered your password? `}
							<Button
								tag='a'
								href='signin'
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

export default ForgotPasswordPage;

export const getServerSideProps: GetServerSideProps = checkAuthentication(
	async (context) => {
		return {
			props: {},
		};
	}
);
