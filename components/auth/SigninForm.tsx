import React from "react";
import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import Checkbox from "../global/Checkbox";

const SigninForm = () => {
	return (
		<form className='space-y-6'>
			<Input
				label='Email Address'
				placeholder='you@sedher.com'
				value={""}
				type='email'
				onChange={() => {}}
			/>
			<Input
				onChange={() => {}}
				label='Password'
				placeholder='password'
				value={""}
				type='password'
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
					tag='link'
					href='/auth/forgot-password'
					className='text-[#616A6A]'>
					Forgot password
				</Button>
			</div>
			<Button
				theme='primary'
				onClick={() => console.log("click")}
				disabled
				className='w-full'
				loading={false}>
				Login
			</Button>
			<div className='text-left text-dark-100 font-epilogue'>
				{`Already have an account? `}
				<Button
					tag='link'
					href='/auth/signup?step=1'
					theme='primary'
					className='font-semibold'>
					Sign up
				</Button>
			</div>
			<div className='pb-8' />
		</form>
	);
};

export default SigninForm;
