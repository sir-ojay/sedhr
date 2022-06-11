import AccountTypes from "@/components/onboarding/account/AccountTypes";
import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import DefaultLayout from "@/layouts/DefaultLayout";
import { NextPage } from "next";
import React from "react";

const account: NextPage = () => {
	return (
		<DefaultLayout title='Sedher | Onboarding | Account'>
			<OnboardingHeader step={1}>
				<main className=''>
					<div className='font-epilogue my-[50px] text-center'>
						<h1 className='font-bold text-[26px] mb-3'>
							Welcome Salami Olutayo
						</h1>
						<p className='text-[#8A94A6]'>
							To get you fully onboard, follow these steps to set up your
							account <br /> and start connecting and collabo
						</p>
					</div>

					<AccountTypes />
				</main>
			</OnboardingHeader>
		</DefaultLayout>
	);
};

export default account;
