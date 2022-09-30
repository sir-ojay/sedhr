import { useEffect, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import DefaultLayout from "@/layouts/DefaultLayout";
import VerificationCategories from "@/components/onboarding/verification/VerificationCategories";
import NoCategories from "@/components/onboarding/verification/NoCategories";
import { useRouter } from "next/router";
import PersonalInformationForm, {
	PersonalInformationDetails,
} from "@/components/onboarding/verification/PersonalInformationForm";
import BusinessInformationForm from "@/components/onboarding/verification/BusinessInformationForm";
import CompanyDetailsForm from "@/components/onboarding/verification/CompanyDetailsForm";
import UploadDocumentsForm from "@/components/onboarding/verification/UploadDocumentsForm";
import { requireAuthentication } from "hoc/requireAuthentication";
import { useCompleteOnboardingMutation } from "@/services/onboarding";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const verification: NextPage = () => {
	const [category, setCategory] = useState("");
	const [personalInformationDetails, setPersonalInformationDetails] =
		useState<PersonalInformationDetails>();

	const router = useRouter();

	const { step, type } = router.query;

	const accountType = (type: string): string => {
		switch (type.toString()) {
			case "hcp's":
				return "hcp";
			case "business":
				return "business";
			case "patient care centres":
				return "pcc";
			case "non profit":
				return "nonprofit";
			default:
				return "";
		}
	};

	const typeSteps =
		type?.toString().toLowerCase().trim() == "hcp's"
			? 2
			: type?.toString().toLowerCase().trim() === "patient care centres"
			? 4
			: 3;

	const personalInformationForm = (details: PersonalInformationDetails) => {
		console.log("details", details);
		setPersonalInformationDetails(details);
	};

	const documentsInfo = (details: any) => {
		handleCompleteOnboarding(details);
	};

	const token = Cookies.get("sedherToken");

	const [completeOnboarding, { isLoading }] = useCompleteOnboardingMutation();

	const handleCompleteOnboarding = async (details: any) => {
		try {
			const data = {
				token: token as string,
				body: {
					category,
					accountType: accountType(type as string),
					...personalInformationDetails,
					idDetails: details,
				} as any,
			};
			console.log("onboarding data", data);
			const result = await completeOnboarding(data).unwrap();
			toast.success(result.message);
			console.log("result", result);
		} catch (err: any) {
			console.log("err", err);
			toast.error(err?.data?.message || err.data.error);
		}
	};

	return (
		<DefaultLayout
			title='Sedher | Onboarding | Verification'
			showHeader={false}>
			<OnboardingHeader
				step={3}
				subStep={Number(step || 1)}
				totalSubSteps={typeSteps}>
				{(step === "1" || step === undefined) && (
					<VerificationCategories
						category={category}
						setCategory={setCategory}
					/>
				)}

				{category && (step === "1" || step === undefined) && (
					<PersonalInformationForm
						personalInformationForm={personalInformationForm}
						category={category}
					/>
				)}

				{step === "2" && <BusinessInformationForm />}

				{step === "3" && <CompanyDetailsForm />}

				{step === "4" && <UploadDocumentsForm documentsInfo={documentsInfo} />}

				{!category && (step === "1" || step === undefined) && <NoCategories />}
			</OnboardingHeader>
		</DefaultLayout>
	);
};

export default verification;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {},
		};
	}
);
