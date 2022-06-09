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
			/>
			<Input label='Password' value={""} type='password' />
			<div className='flex justify-between items-center'>
				<Checkbox value={true} label='Remember me' size='md' id='rememberMe' />
				<div>Forget password</div>
			</div>
			<Button theme='primary' disabled className='w-full' loading={false}>
				Get Started
			</Button>
		</form>
	);
};

export default SigninForm;
