import Signup from "@/components/auth/Signup";
import AuthLayout from "@/components/layouts/authLayout";
import { NextPage } from "next";
import React from "react";

const signup: NextPage = () => {
	return (
		<AuthLayout>
			<Signup />
		</AuthLayout>
	);
};

export default signup;
