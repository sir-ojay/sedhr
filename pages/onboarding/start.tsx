import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import DefaultLayout from "@/layouts/DefaultLayout";
import { NextPage } from "next";

const start: NextPage = () => {
	return (
		<DefaultLayout title='Sedher | Onboarding | Start'>
			<OnboardingHeader step={4}></OnboardingHeader>
		</DefaultLayout>
	);
};

export default start;
