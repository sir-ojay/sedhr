import React from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import ListNav from "@/components/global/ListNav";
import GoBackButton from "@/components/global/GoBackButton";
import SynergiCard from "@/components/collaboration/sedher-synergi/SynergiCard";

type ActiveH2hProps = {
	navigations: {
		name: string;
		href: string;
		query: string;
		count: number;
	}[];
};
const ActiveSedherSynergi = ({ navigations }: ActiveH2hProps) => {
	return (
		<DefaultLayout>
			<div className='space-y-8'>
				<GoBackButton label='My Sedher Synergi' />

				<ListNav type='slug' navs={navigations} />
				<section className='grid md:grid-cols-2 xl:grid-cols-3 gap-8 '>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((card) => (
						<SynergiCard type='active' key={card} />
					))}
				</section>
			</div>
		</DefaultLayout>
	);
};

export default ActiveSedherSynergi;
ActiveSedherSynergi.defaultProps = {
	navigations: [
		{
			name: "Active Sedher Synergi",
			href: "/collaboration/sedher-synergi/active-sedher-synergi",
		},
		{
			name: "Previous Sedher Synergi",
			href: "/collaboration/sedher-synergi/previous-sedher-synergi",
		},
		{
			name: "Cancel Sedher Synergi",
			href: "/collaboration/sedher-synergi/cancel-sedher-synergi",
		},
		{
			name: "Create sedher synergi",
			href: "/collaboration/sedher-synergi/create-sedher-synergi",
		},
	],
};
