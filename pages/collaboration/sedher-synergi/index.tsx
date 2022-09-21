import CollaborationNav from "@/components/collaboration/CollaborationNav";
import CollaborationWrapper from "@/components/collaboration/CollaborationWrapper";
import SynergiCard from "@/components/collaboration/sedher-synergi/SynergiCard";
import Button from "@/components/global/Button";
import GridContainer from "@/components/global/GridContainer";
import Input from "@/components/global/Input";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useRouter } from "next/router";
import { useState } from "react";

type SedherSynergiProps = {
	navigations: {
		name: string;
		href: string;
		query: string;
		count: number;
	}[];
	grid: number;
};

const SedherSynergi = ({ navigations }: SedherSynergiProps) => {
	const [grid, setGrid] = useState(2);

	const getGrid = (grid: number) => {
		setGrid(grid);
	};

	const router = useRouter();

	return (
		<DefaultLayout title='Sedher | Collaboration | Sedher Synergi'>
			<CollaborationWrapper getGrid={getGrid}>
				<div className='grid grid-cols-6 gap-8'>
					<section className='col-span-2 space-y-6'>
						<CollaborationNav
							title='My Sedher Synergi'
							navigations={navigations}
						/>
					</section>
					<section className='col-span-4 space-y-6'>
						<WhiteWrapper className='flex items-center justify-between'>
							<div
								title='Request for Proposal'
								className='font-semibold text-lg text-dark-900'>
								Sedher Synergi
							</div>
							<Button
								icon='plus'
								size='sm'
								className='w-[234px]'
								onClick={() =>
									router.push("/collaboration/sedher-synergi/templates")
								}>
								Create H2H
							</Button>
						</WhiteWrapper>

						<WhiteWrapper>
							<form action=''>
								<div
									title='Request for Proposal'
									className='font-semibold text-lg text-dark-900'>
									Search for Sedher Synergi
								</div>
								<Input type='search' placeholder='This is placeholder' />
								<p className='text-sm text-dark-100 mt-2'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
								</p>
							</form>
						</WhiteWrapper>

						<GridContainer grid={grid}>
							{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
								(card) => (
									<SynergiCard key={card} type='all' />
								)
							)}
						</GridContainer>
					</section>
				</div>
			</CollaborationWrapper>
		</DefaultLayout>
	);
};

export default SedherSynergi;

SedherSynergi.defaultProps = {
	navigations: [
		{
			name: "Active Sedher Synergi",
			href: "/collaboration/sedher-synergi/active-sedher-synergi",
			count: 2,
			// query: "?t=product",
		},
		{
			name: "Previous Sedher Synergi",
			href: "/collaboration/sedher-synergi/previous-sedher-synergi",
			count: 45,
		},
		{
			name: "Cancel Sedher Synergi",
			href: "/collaboration/sedher-synergi/cancel-sedher-synergi",
			count: 5,
		},
	],
};
