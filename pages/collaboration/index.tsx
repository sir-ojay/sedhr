import ListNav from "@/components/global/ListNav";
import ListSortHeader from "@/components/global/ListSortHeader";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useRouter } from "next/router";
import React, { useState } from "react";

type CollaborationProps = {
	defaultGrid: number;
	navs: {
		name: string;
		href: string;
	}[];
};

const Collaboration = ({ navs, defaultGrid }: CollaborationProps) => {
	const [grid, setGrid] = useState(defaultGrid);
	const {
		query: { t },
	} = useRouter();

	return (
		<DefaultLayout>
			<section className='space-y-6'>
				<ListSortHeader
					title='Collaboration'
					results={73}
					setGrid={setGrid}
					defaultGrid={defaultGrid}
					connect
					description='collaborate with your follow connection'
				/>
				<ListNav navs={navs} />
			</section>
		</DefaultLayout>
	);
};

export default Collaboration;

Collaboration.defaultProps = {
	defaultGrid: 4,
	navs: [
		{
			name: "RFP",
			href: "/collaboration?t=rfp",
		},
		{
			name: "Sedher collabo",
			href: "/collaboration?t=sedher-collabo",
		},
		{
			name: "Sedher H2H Commerce",
			href: "/collaboration?t=sedher-h2h-commerce",
		},
		{
			name: "Sedher Synergi",
			href: "/collaboration?t=sedher-synergi",
		},
		{
			name: "Communication",
			href: "/collaboration?t=communication",
		},
	],
};
