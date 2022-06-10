import Left from "@/components/auth/Left";
import Signup from "@/components/auth/Signup";
import { NextPage } from "next";
import React from "react";

const signup: NextPage = () => {
	return (
		<section className='flex items-center w-full h-[100vh]'>
			<Left />
			<Signup />
		</section>
	);
};

export default signup;
