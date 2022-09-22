import { useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import DefaultLayout from "@/layouts/DefaultLayout";
import VerificationCategories from "@/components/onboarding/verification/VerificationCategories";
import NoCategories from "@/components/onboarding/verification/NoCategories";
import { useRouter } from "next/router";
import PersonalInformationForm from "@/components/onboarding/verification/PersonalInformationForm";
import BusinessInformationForm from "@/components/onboarding/verification/BusinessInformationForm";
import CompanyDetailsForm from "@/components/onboarding/verification/CompanyDetailsForm";
import UploadDocumentsForm from "@/components/onboarding/verification/UploadDocumentsForm";
import { requireAuthentication } from "hoc/requireAuthentication";

const verification: NextPage = () => {
	const [categories, setCategories] = useState<string[]>([]);

	const router = useRouter();

	const { step } = router.query;

	return (
		<DefaultLayout
			title='Sedher | Onboarding | Verification'
			showHeader={false}>
			<OnboardingHeader step={3} subStep={Number(step || 1)}>
				{(step === "1" || step === undefined) && (
					<VerificationCategories
						categories={categories}
						setCategories={setCategories}
					/>
				)}

				{categories.length > 0 && (step === "1" || step === undefined) && (
					<PersonalInformationForm categories={categories} />
				)}

				{step === "2" && <BusinessInformationForm />}

				{step === "3" && <CompanyDetailsForm />}

				{step === "4" && <UploadDocumentsForm />}

				{categories.length === 0 && (step === "1" || step === undefined) && (
					<NoCategories />
				)}
			</OnboardingHeader>
		</DefaultLayout>
	);
};

export default verification;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
