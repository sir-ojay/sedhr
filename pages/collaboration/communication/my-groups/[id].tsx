import AboutCard from "@/components/global/AboutCard";
import GoBackButton from "@/components/global/GoBackButton";
import LargeDetailsCard from "@/components/global/LargeDetailsCard";
import LargeProfileCard from "@/components/global/LargeProfileCard";
import AdditionalDetailsCard from "@/components/sedher-universe/AdditionalDetailsCard";
import DefaultLayout from "@/layouts/DefaultLayout";

const SingleGroup = () => {
	return (
		<DefaultLayout title='Sedher | Adagio CME-CPD Training Services'>
			<GoBackButton label='Communication' />
			<div className='flex flex-col lg:grid lg:grid-cols-9 gap-8 mt-10'>
				<AdditionalDetailsCard type='group' />
				<div className='col-span-6 space-y-5'>
					<LargeDetailsCard type='group' />
					<AboutCard title='About Group' />
					<LargeProfileCard title='Admins' type='group' />
				</div>
			</div>
		</DefaultLayout>
	);
};

export default SingleGroup;
