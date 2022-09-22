import Signin from "@/components/auth/Signin";
import AuthLayout from "@/layouts/AuthLayout";
import { checkAuthentication } from "hoc/checkAuthentication";
import { GetServerSideProps, NextPage } from "next";

const SigninPage: NextPage = () => {
	return (
		<AuthLayout title='Sedher | Sign in'>
			<Signin />
		</AuthLayout>
	);
};

export default SigninPage;

export const getServerSideProps: GetServerSideProps = checkAuthentication(
	async (context) => {
		return {
			props: {},
		};
	}
);
