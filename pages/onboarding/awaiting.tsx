import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import DefaultLayout from "@/layouts/DefaultLayout";
import { requireAuthentication } from "hoc/requireAuthentication";
import { GetServerSideProps, NextPage } from "next";


const awaiting: NextPage = () => {
	return (
		<DefaultLayout title='Sedher | Onboarding' showHeader={false}>
		<section className='flex w-full mt-10 md:mt-[50px] justify-center'>
					<div className='max-w-[728px] text-center w-full rounded-[15px] shadow-2xl px-4 bg-white py-20 flex flex-col items-center gap-4 md:gap-6'>
						<div>
							<img
								src='/assets/icons/onboarding/start/welcome.svg'
								alt='welcome'
							/>
						</div>
						<h4 className='font-semibold font-clash text-2xl md:text-3xl text-primary'>
						Your onboarding approval is in process!
						</h4>
						{/* <p className='font-medium text-lg font-epilogue text-neutral-60 max-w-[460px]'>
							Awesome! Your Membership ID{" "}
							<span className='text-[#7F4433]'>xxxxxxxxx</span> has been
							successfully created
						</p> */}
						<p className='font-medium text-sm md:text-lg font-epilogue text-neutral-60 max-w-[460px]'>
                        An approval email will be sent in about 24 hours
						</p>
					</div>
				</section>
		</DefaultLayout>
	);
};

export default awaiting;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
