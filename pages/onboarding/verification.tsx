import { useState } from "react";
import { NextPage } from "next";
import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import DefaultLayout from "@/layouts/DefaultLayout";
import VerificationCategories from "@/components/onboarding/verification/VerificationCategories";
import NoCategories from "@/components/onboarding/verification/NoCategories";
import Button from "@/components/global/Button";
import { useRouter } from "next/router";

const verification: NextPage = () => {
	const [categories, setCategories] = useState<string[]>([]);

	const router = useRouter();

	const { step } = router.query;

	const handleStep = (step: number) =>
		router.push(`/onboarding/verification?step=${step}`);

	return (
		<DefaultLayout title='Sedher | Onboarding | Verification'>
			<OnboardingHeader step={3} subStep={Number(step || 1)}>
				<VerificationCategories
					categories={categories}
					setCategories={setCategories}
				/>

				{categories.length === 0 && <NoCategories />}

				<div className='flex justify-end my-10'>
					<Button
						disabled={categories.length === 0}
						onClick={() => handleStep(2)}
						size='sm'
						className='w-[311px]'>
						Next Step
					</Button>
				</div>
			</OnboardingHeader>
		</DefaultLayout>
	);
};

export default verification;
