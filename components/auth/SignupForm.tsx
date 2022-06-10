import React from "react";
import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import Checkbox from "../global/Checkbox";
import { useRouter } from "next/router";

type SignupFormProps = {
	loading: boolean;
	setLoading: (state: boolean) => void;
};

const SignupForm = ({ loading, setLoading }: SignupFormProps) => {
	const router = useRouter();
	return (
		<form className='space-y-6'>
			<Input
				label='First Name'
				placeholder='first name'
				value={""}
				onChange={() => {}}
			/>
			<Input
				label='Last Name'
				placeholder='last name'
				value={""}
				onChange={() => {}}
			/>
			<Input
				label='Email Address'
				placeholder='you@sedher.com'
				value={""}
				type='email'
				onChange={() => {}}
			/>
			<div className='flex justify-between items-center'>
				<label className='flex '>
					<Checkbox
						value={true}
						size='md'
						id='rememberMe'
						onChange={() => {}}
					/>
					<div className='text-left text-dark-100 font-epilogue text-sm'>
						{`By clicking 'Continue', you acknowledge that you have read and
						accept the `}
						<Button tag='link' href='/terms-of-service' theme='secondary'>
							Terms of Service
						</Button>
						{` and `}
						<Button tag='link' href='/privacy-policy' theme='secondary'>
							Privacy Policy.
						</Button>
					</div>
				</label>
			</div>
			<Button
				theme='primary'
				onClick={(event) => {
					event.preventDefault();
					setLoading(true);
					setTimeout(() => {
						router.push("signup?step=2");
						setLoading(false);
					}, 1500);
				}}
				// disabled
				className='w-full'
				loading={loading}>
				Get Started
			</Button>
			<div className='text-left text-dark-100 font-epilogue'>
				{`Already have an account? `}
				<Button
					tag='link'
					href='signin'
					theme='primary'
					className='font-semibold'>
					Sign in
				</Button>
			</div>
			<div className='pb-8' />
		</form>
	);
};

export default SignupForm;
