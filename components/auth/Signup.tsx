import React, { useState } from "react";
import Button from "@/components/global/Button";
import Divider from "@/components/global/Divider";
import SignupForm from "./SignupForm";
import Input from "../global/Input";
import { useRouter } from "next/router";

const Signup = () => {
	const router = useRouter();

	const { step } = router.query;

	const [loading, setLoading] = useState(false);

	return (
		<section className='w-[408px] mx-auto mt-[90px] text-center'>
			{(step === "1" || step === undefined) && (
				<>
					<h1 className='font-semibold text-[32px] leading-[120%] text-dark-900 font-clash'>
						Welcome to Sedher
					</h1>
					<p className='font-epilogue font-medium text-lg leading-[160%] text-dark-100 mb-6'>
						Let us get to know you better!
					</p>
					<Button
						theme='plain'
						className='w-full border-2 border-[#D4EBEB] text-[#103BF2]'
						icon='google'>
						Sign up with Google
					</Button>
					<Divider label='Or sign up with email' />
					<SignupForm loading={loading} setLoading={setLoading} />
				</>
			)}
			{step === "2" && (
				<>
					<h1 className='font-semibold text-[32px] leading-[120%] text-dark-900 font-clash'>
						Verify your Email
					</h1>
					<p className='font-epilogue font-medium text-lg leading-[160%] text-dark-100 mb-6'>
						Please fill the code to confirm your email
					</p>
					<form className='space-y-6'>
						<Input
							label='Enter verification Code'
							placeholder='Enter your verification Code'
							value={""}
							onChange={() => {}}
						/>
						<Button
							theme='primary'
							onClick={(event) => {
								event.preventDefault();
								setLoading(true);
								setTimeout(() => {
									router.push("signup?step=3");

									setLoading(false);
								}, 1500);
							}}
							// disabled
							className='w-full'
							loading={loading}>
							Verify
						</Button>
						<div className='text-left text-dark-100 font-epilogue'>
							{`Didn’t get the code? `}
							<Button tag='a' theme='primary' className='font-semibold'>
								Click Resend
							</Button>
						</div>
					</form>
				</>
			)}
			{step === "3" && (
				<>
					<h1 className='font-semibold text-[32px] leading-[120%] text-dark-900 font-clash'>
						password
					</h1>
					<p className='font-epilogue font-medium text-lg leading-[160%] text-dark-100 mb-6'>
						Create your password
					</p>
					<form className='space-y-6'>
						<Input
							label='Create Password'
							placeholder='Enter your Password'
							type='password'
							value={""}
							onChange={() => {}}
						/>
						<Input
							label='Confirm Password'
							placeholder='Enter your Confirm Password'
							type='password'
							value={""}
							onChange={() => {}}
						/>
						<Button
							theme='primary'
							onClick={() => console.log("success")}
							// disabled
							className='w-full'
							loading={false}>
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
				</>
			)}
		</section>
	);
};

export default Signup;
