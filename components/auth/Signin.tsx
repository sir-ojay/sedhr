import React from "react";
import Button from "@/components/global/Button";
import SigninForm from "./SigninForm";

const Signin = () => {
	return (
		<>
			<div className='w-[55%] h-full'>
				<div className='w-[408px] mx-auto mt-[90px] text-center'>
					<h1 className='font-semibold text-[32px] leading-[120%] text-dark-900 font-clash'>
						Welcome to Sedher
					</h1>
					<p className='font-epilogue font-medium text-lg leading-[160%] text-dark-100'>
						Let us get to know you better!
					</p>
					<Button
						theme='outline'
						className='w-full border-[#D4EBEB] text-[#103BF2]'
						loading={false}
						icon='google'>
						Sign in with Google
					</Button>
					<SigninForm />
				</div>
			</div>
		</>
	);
};

export default Signin;
