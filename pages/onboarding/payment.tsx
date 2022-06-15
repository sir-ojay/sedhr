import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import AccountPackages from "@/components/onboarding/payments/AccountPackages";
import AccountTypesHorizontalList from "@/components/onboarding/payments/AccountTypesHorizontalList";
import DefaultLayout from "@/layouts/DefaultLayout";
import { NextPage } from "next";
import { useState } from "react";

const payment: NextPage = () => {
	const [billRange, setBillRange] = useState("monthly");

	return (
		<DefaultLayout title='Sedher | Onboarding | Payment'>
			<OnboardingHeader step={2}>
				<AccountTypesHorizontalList />

				<div className='flex flex-col font-epilogue text-center items-center'>
					<div className='w-[265px] my-9 flex items-center justify-between bg-tertiary p-1'>
						<div
							onClick={() => setBillRange("monthly")}
							className={`px-3 py-2 font-semibold cursor-pointer transition-all ease-linear ${
								billRange === "monthly"
									? "bg-white text-primary"
									: "text-[#11747d67]"
							}`}>
							Bill monthly
						</div>
						<div
							onClick={() => setBillRange("annually")}
							className={`px-3 py-2 font-semibold cursor-pointer transition-all ease-linear ${
								billRange === "annually"
									? "bg-white text-primary"
									: "text-[#11747d67]"
							}`}>
							Billed Annually
						</div>
					</div>

					<p className='text-secondary max-w-[538px]'>
						We set out with one goal in mind: to produce the most user-friendly
						web community software ever. We were successful.
					</p>
				</div>

				<AccountPackages />
			</OnboardingHeader>
		</DefaultLayout>
	);
};

export default payment;
