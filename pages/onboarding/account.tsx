import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import DefaultLayout from "@/layouts/DefaultLayout";
import { NextPage } from "next";
import React from "react";

const account: NextPage = () => {
	return (
		<DefaultLayout title='Sedher | Onboarding | Account'>
			<OnboardingHeader step={1}>
				<main>
					<div>
						<h1 className='text-center font-epilogue'>
							Welcome Salami Olutayo
						</h1>
					</div>
				</main>
			</OnboardingHeader>
		</DefaultLayout>
	);
};

export default account;
