import Signup from "@/components/auth/Signup";
import AuthLayout from "@/layouts/AuthLayout";
import { NextPage } from "next";
import React from "react";

const signup: NextPage = () => {
	return (
		<AuthLayout title='Sedher | Sign up | Create an account'>
			<Signup />
		</AuthLayout>
	);
};

export default signup;
