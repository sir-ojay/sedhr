import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import DefaultLayout from "@/layouts/DefaultLayout";
import { NextPage } from "next";

const payment: NextPage = () => {
	return (
		<DefaultLayout title='Sedher | Onboarding | Payment'>
			<OnboardingHeader step={2}></OnboardingHeader>
		</DefaultLayout>
	);
};

export default payment;
