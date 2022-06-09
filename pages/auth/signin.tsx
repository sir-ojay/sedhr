import Left from "@/components/auth/Left";
import Signin from "@/components/auth/Signin";
import { NextPage } from "next";

const signin: NextPage = () => {
	return (
		<section className='flex items-center w-full h-[100vh]'>
			<Left />
			<Signin />
		</section>
	);
};

export default signin;
