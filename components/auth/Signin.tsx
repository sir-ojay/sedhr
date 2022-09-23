import Button from "@/components/global/Button";
import SigninForm from "./SigninForm";
import Divider from "@/components/global/Divider";

const Signin = () => {
	return (
		<section className='w-full md:w-[408px] mx-auto mt-10 md:mt-[90px] text-center'>
			<h1 className='font-semibold text-[32px] leading-[120%] text-dark-900 font-clash'>
				Welcome to Sedher
			</h1>
			<p className='font-epilogue font-medium text-sm md:text-lg leading-[160%] text-dark-100 mb-6'>
				Let us get to know you better!
			</p>
			<Button
				theme='plain'
				className='w-full border-2 border-[#D4EBEB] text-[#103BF2]'
				loading={false}
				icon='google'>
				Sign in with Google
			</Button>
			<Divider label='Or sign in with email' />
			<SigninForm />
		</section>
	);
};

export default Signin;
