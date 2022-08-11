import CollaborationNav from "@/components/collaboration/CollaborationNav";
import CollaborationWrapper from "@/components/collaboration/CollaborationWrapper";
import RFPCard from "@/components/collaboration/rfp/RFPCard";
import Button from "@/components/global/Button";
import GridContainer from "@/components/global/GridContainer";
import Input from "@/components/global/Input";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useRouter } from "next/router";
import { useState } from "react";

type RFPProps = {
	navigations: {
		name: string;
		href: string;
		query: string;
		count: number;
	}[];
	grid: number;
};

const RFP = ({ navigations }: RFPProps) => {
	const [grid, setGrid] = useState(2);

	const getGrid = (grid: number) => {
		setGrid(grid);
	};

	const router = useRouter();

	return (
		<DefaultLayout title='Sedher | Collaboration | RFP'>
			<CollaborationWrapper getGrid={getGrid}>
				<div className='grid grid-cols-6 gap-8'>
					<section className='col-span-2 space-y-6'>
						<CollaborationNav
							title='My request for proposal'
							navigations={navigations}
						/>
					</section>
					<section className='col-span-4 space-y-6'>
						<WhiteWrapper className='flex items-center justify-between'>
							<div
								title='Request for Proposal'
								className='font-semibold text-lg text-dark-900'>
								Request for Proposal
							</div>
							<Button
								icon='plus'
								size='sm'
								className='w-[234px]'
								onClick={() => router.push("/collaboration/rfp/create")}>
								Create RFP
							</Button>
						</WhiteWrapper>

						<div className='flex items-center gap-3'>
							<Button
								theme='plain'
								className='border-2 border-[#B8C9C9] rounded-full text-primary bg-tertiary'>
								All
							</Button>
							<Button
								theme='plain'
								className='border-2 border-[#B8C9C9] rounded-full text-[#4C4475]'>
								Product RFP
							</Button>
							<Button
								theme='plain'
								className='border-2 border-[#B8C9C9] rounded-full text-[#4C4475]'>
								Service RFP
							</Button>
						</div>

						<WhiteWrapper>
							<form action=''>
								<div
									title='Request for Proposal'
									className='font-semibold text-lg text-dark-900'>
									Request for Proposal
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
									<RFPCard key={card} type='all' />
								)
							)}
						</GridContainer>
					</section>
				</div>
			</CollaborationWrapper>
		</DefaultLayout>
	);
};

export default RFP;

RFP.defaultProps = {
	navigations: [
		{
			name: "Active RFP",
			href: "/collaboration/rfp/active-rfp",
			count: 45,
			// query: "?t=product",
		},
		{
			name: "Complete RFP",
			href: "/collaboration/rfp/",
			count: 45,
		},
		{
			name: "Saved RFP",
			href: "/collaboration/rfp/",
			count: 45,
		},
	],
};
