import ListNav from "@/components/global/ListNav";
import ListSortHeader from "@/components/global/ListSortHeader";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type CollaborationWrapperProps = {
	defaultGrid: number;
	navs: {
		name: string;
		href: string;
	}[];
	children?: React.ReactNode;
	getGrid?: (grid: number) => void;
	showHeader?: boolean;
};

const CollaborationWrapper = ({
	navs,
	defaultGrid,
	children,
	getGrid,
	showHeader = true,
}: CollaborationWrapperProps) => {
	const [grid, setGrid] = useState(defaultGrid);
	const {
		query: { t },
	} = useRouter();

	useEffect(() => {
		getGrid && getGrid(grid);
	}, [grid]);

	return (
		<>
			<section className='space-y-6'>
				{showHeader && (
					<ListSortHeader
						title='Collaboration'
						setGrid={setGrid}
						defaultGrid={defaultGrid}
						description='collaborate with your follow connection'
					/>
				)}
				<ListNav navs={navs} type='slug' />
			</section>
			<section className='mt-8 space-y-8'>{children}</section>
		</>
	);
};

export default CollaborationWrapper;

CollaborationWrapper.defaultProps = {
	defaultGrid: 2,
	navs: [
		{
			name: "RFP",
			href: "/collaboration/rfp",
		},
		{
			name: "Sedher collabo",
			href: "/collaboration/sedher-collabo",
		},
		{
			name: "Sedher H2H Commerce",
			href: "/collaboration/sedher-h2h-commerce",
		},
		{
			name: "Sedher Synergi",
			href: "/collaboration/sedher-synergi",
		},
		{
			name: "Sedher Luminaries",
			href: "/collaboration/sedher-luminaries",
		},
		{
			name: "Communication",
			href: "/collaboration/communication/my-groups",
		},
	],
};
