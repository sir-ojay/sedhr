import CollaborationNav from "@/components/collaboration/CollaborationNav";
import CollaborationWrapper from "@/components/collaboration/CollaborationWrapper";
// import CollaboCard from "@/components/collaboration/sedher-collabo/CollaboCard";
// import GridContainer from "@/components/global/GridContainer";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useRouter } from "next/router";
import { useState } from "react";

type SedherCollaboProps = {
	navigations: {
		name: string;
		href: string;
		query: string;
		count: number;
	}[];
	grid: number;
};

const SedherCollabo = ({ navigations }: SedherCollaboProps) => {
	const [grid, setGrid] = useState(2);

	const getGrid = (grid: number) => {
		setGrid(grid);
	};

	const router = useRouter();

	return (
		<DefaultLayout title='Sedher | Collaboration | Sedher Collabo'>


			<CollaborationWrapper getGrid={getGrid}>
				<div className='grid grid-cols-6 gap-8'>
					
					{/* <section className='col-span-2 space-y-6'>
						<CollaborationNav
							title='My Sedher collabo'
							navigations={navigations}
						/>
					</section> */}
					{/* <section className='col-span-4 space-y-6'>
						<WhiteWrapper className='flex items-center justify-between'>
							<div
								title='Request for Proposal'
								className='font-semibold text-lg text-dark-900'>
								Sedher Collabo
							</div>
						</WhiteWrapper>

						<GridContainer grid={grid}>
							{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
								(card) => (
									<CollaboCard key={card} type='all' />
								)
							)}
						</GridContainer>
					</section> */}
				</div>
			</CollaborationWrapper>
			<WhiteWrapper>
                <h3 className='text-lg leading-normal font-medium'> Features coming soon...</h3>
               
			</WhiteWrapper>
		</DefaultLayout>
	);
};

export default SedherCollabo;

// SedherCollabo.defaultProps = {
// 	navigations: [
// 		// {
// 		// 	name: "Active collabo",
// 		// 	href: "/collaboration/sedher-collabo/active-collabo",
// 		// 	count: 1,
// 		// 	// query: "?t=product",
// 		// },
// 		// {
// 		// 	name: "Complete Collabo",
// 		// 	href: "/collaboration/sedher-collabo/",
// 		// 	count: 2,
// 		// },
// 	],
// };
