import LargeDetailsCard from "@/components/global/LargeDetailsCard";
import ListNav from "@/components/global/ListNav";
import AdditionalDetailsCard from "@/components/sedher-universe/AdditionalDetailsCard";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useRouter } from "next/router";
import React from "react";

const Event = () => {
	const router = useRouter();
	const userId = router.query.username?.toString() as string;
	const navigations = [
		{
			name: "Home",
			href: `/profile/${userId}`,
		},
		{
			name: "Activity",
			href: `/profile/${userId}/activity`,
		},
		{
			name: "Events",
			href: `/profile/${userId}/event`,
		},
		{
			name: "Group",
			href: `/profile/${userId}/group`,
		},
	];
	return (
		<DefaultLayout>
			<div className='flex flex-col lg:grid lg:grid-cols-9 gap-8'>
				<div className='col-span-6 space-y-5'>
					<LargeDetailsCard type='profile' />
					<ListNav navs={navigations} type='slug' />
				</div>
				<AdditionalDetailsCard type='profile' />
			</div>
		</DefaultLayout>
	);
};

export default Event;
