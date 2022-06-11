import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import DefaultLayout from "@/layouts/DefaultLayout";
import { NextPage } from "next";

const verification: NextPage = () => {
	return (
		<DefaultLayout title='Sedher | Onboarding | Verification'>
			<OnboardingHeader step={3}></OnboardingHeader>
		</DefaultLayout>
	);
};

export default verification;
