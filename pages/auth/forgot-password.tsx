import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import AuthLayout from "@/layouts/AuthLayout";
import { NextPage } from "next";
import React from "react";

const forgotPassword: NextPage = () => {
	return (
		<AuthLayout title='Sedher | Forgot password'>
			<section className='w-[408px] mx-auto mt-[90px] text-center'>
				<h1 className='font-semibold text-[32px] leading-[120%] text-dark-900 mb-2 font-clash'>
					Forgot Password
				</h1>
				<p className='font-epilogue font-medium text-lg leading-[160%] text-dark-100 mb-6'>
					Enter the email associated with your account and we’ll send an email
					with instructions to reset your Password
				</p>
				<form className='space-y-6'>
					<Input
						label='Email Address'
						placeholder='Enter your Email Address'
						type='email'
						value={""}
						onChange={() => {}}
					/>
					<Button
						theme='primary'
						// disabled
						className='w-full'>
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
			</section>
		</AuthLayout>
	);
};

export default forgotPassword;
