import Button from "@/components/global/Button";
import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import DefaultLayout from "@/layouts/DefaultLayout";
import { requireAuthentication } from "hoc/requireAuthentication";
import { GetServerSideProps, NextPage } from "next";
import Router from "next/router";

const start: NextPage = () => {
	const goto = () => Router.push("/feed");

	return (
		<DefaultLayout title='Sedher | Onboarding | Start' showHeader={false}>
			<OnboardingHeader step={4}>
				<section className='flex w-full justify-center items-center min-h-screen'>
					<div className='max-w-[728px] text-center w-full rounded-[15px] shadow-2xl bg-white py-20 flex flex-col items-center gap-6'>
						<div>
							<img
								src='/assets/icons/onboarding/start/welcome.svg'
								alt='welcome'
							/>
						</div>
						<h4 className='font-semibold font-clash text-3xl text-primary'>
							Welcome on board!
						</h4>
						<p className='font-medium text-lg font-epilogue text-neutral-60 max-w-[460px]'>
							Awesome! Your Membership ID{" "}
							<span className='text-[#7F4433]'>xxxxxxxxx</span> has been
							successfully created
						</p>
						<Button type='button' className='w-[418px]' onClick={goto}>
							Let’s go!
						</Button>
					</div>
				</section>
			</OnboardingHeader>
		</DefaultLayout>
	);
};

export default start;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
