import AboutCard from "@/components/global/AboutCard";
import GoBackButton from "@/components/global/GoBackButton";
import LargeDetailsCard from "@/components/global/LargeDetailsCard";
import LargeProfileCard from "@/components/global/LargeProfileCard";
import AdditionalDetailsCard from "@/components/sedher-universe/AdditionalDetailsCard";
import DefaultLayout from "@/layouts/DefaultLayout";
import { requireAuthentication } from "hoc/requireAuthentication";
import { GetServerSideProps } from "next";

const SingleGroup = () => {
	return (
		<DefaultLayout title='Sedher | Adagio CME-CPD Training Services'>
			<GoBackButton label='My Events' />
			<div className='flex flex-col lg:grid lg:grid-cols-9 gap-8 mt-10'>
				<AdditionalDetailsCard type='event' />
				<div className='col-span-6 space-y-5'>
					<LargeDetailsCard type='event' />
					<AboutCard title='About Event' />
					<LargeProfileCard title='Post by' type='event' />
				</div>
			</div>
		</DefaultLayout>
	);
};

export default SingleGroup;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
