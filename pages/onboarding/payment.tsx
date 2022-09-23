import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import AccountPackages from "@/components/onboarding/payments/AccountPackages";
import AccountTypesHorizontalList from "@/components/onboarding/payments/AccountTypesHorizontalList";
import DefaultLayout from "@/layouts/DefaultLayout";
import { requireAuthentication } from "hoc/requireAuthentication";
import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { usePaystackPayment } from "react-paystack";

const payment: NextPage = () => {
	const [billRange, setBillRange] = useState("monthly");
	const [amount, setAmount] = useState<number>(0);

	const config = {
		reference: new Date().getTime().toString(),
		email: "user@example.com",
		amount: amount * 100,
		publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PK as string,
	};

	// you can call this function anything
	const onSuccess = (reference: void) => {
		// Implementation for whatever you want to do with reference and after success call.
		console.log(reference);
	};

	// you can call this function anything
	const onClose = () => {
		// implementation for  whatever you want to do when the Paystack dialog closed.
		console.log("closed");
	};

	const initializePayment = usePaystackPayment(config);

	const makePayment = (_amount: number) => {
		setAmount(_amount);
	};

	useEffect(() => {
		if (amount > 0) initializePayment(onSuccess, onClose);
	}, [amount]);

	return (
		<DefaultLayout title='Sedher | Onboarding | Payment' showHeader={false}>
			<OnboardingHeader step={2}>
				<AccountTypesHorizontalList />

				<section className='flex flex-col font-epilogue text-center items-center'>
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
				</section>

				<AccountPackages makePayment={makePayment} />
			</OnboardingHeader>
		</DefaultLayout>
	);
};

export default payment;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
