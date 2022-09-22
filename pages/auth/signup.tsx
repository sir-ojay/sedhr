import Signup from "@/components/auth/Signup";
import AuthLayout from "@/layouts/AuthLayout";
import { checkAuthentication } from "hoc/checkAuthentication";
import { GetServerSideProps, NextPage } from "next";

const SignupPage: NextPage = () => {
	return (
		<AuthLayout title='Sedher | Sign up | Create an account'>
			<Signup />
		</AuthLayout>
	);
};

export default SignupPage;

export const getServerSideProps: GetServerSideProps = checkAuthentication(
	async (context) => {
		return {
			props: {},
		};
	}
);
