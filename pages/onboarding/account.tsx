import AccountTypes from "@/components/onboarding/account/AccountTypes";
import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import DefaultLayout from "@/layouts/DefaultLayout";
import { LoginResponse } from "@/types/auth/auth";
import { requireAuthentication } from "hoc/requireAuthentication";
import Cookies from "js-cookie";
import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";

const AccountPage: NextPage = () => {
	const [user, setUser] = useState<LoginResponse>();

	useEffect(() => {
		try {
			const user = JSON.parse(Cookies.get("sedherUser") || "{}");
			setUser(user);
		} catch (error) {}
	}, []);

	return (
		<DefaultLayout title='Sedher | Onboarding | Account' showHeader={false}>
			<OnboardingHeader step={1}>
				<section>
					<div className='font-epilogue my-[50px] text-center'>
						{user && (
							<h1 className='font-bold text-[26px] md:mb-3'>
								Welcome {user?.name}
							</h1>
						)}
						<p className='text-[#8A94A6] text-sm md:text-base'>
							To get you fully onboard, follow these steps to set up your
							account <br /> and start connecting and collabo
						</p>
					</div>

					<AccountTypes />
				</section>
			</OnboardingHeader>
		</DefaultLayout>
	);
};

export default AccountPage;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
