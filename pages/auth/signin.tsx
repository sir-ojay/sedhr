import Signin from "@/components/auth/Signin";
import AuthLayout from "@/components/layouts/authLayout";
import { NextPage } from "next";

const signin: NextPage = () => {
	return (
		<AuthLayout>
			<Signin />
		</AuthLayout>
	);
};

export default signin;
