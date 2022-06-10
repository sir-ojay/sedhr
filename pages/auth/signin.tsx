import Signin from "@/components/auth/Signin";
import AuthLayout from "@/layouts/AuthLayout";
import { NextPage } from "next";

const signin: NextPage = () => {
	return (
		<AuthLayout title='Sedher | Sign in'>
			<Signin />
		</AuthLayout>
	);
};

export default signin;
