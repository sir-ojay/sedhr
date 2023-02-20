import CollaborationNav from "@/components/collaboration/CollaborationNav";
import CollaborationWrapper from "@/components/collaboration/CollaborationWrapper";
import LuminariesCard from "@/components/collaboration/sedher-luminaries/LuminariesCard";
// import Button from "@/components/global/Button";
// import GridContainer from "@/components/global/GridContainer";
// import Input from "@/components/global/Input";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { requireAuthentication } from "hoc/requireAuthentication";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

type SedherLuminariesProps = {
	navigations: {
		name: string;
		href: string;
		query: string;
		count: number;
	}[];
	grid: number;
};

const SedherLuminaries = ({ navigations }: SedherLuminariesProps) => {
	const [grid, setGrid] = useState(2);

	const getGrid = (grid: number) => {
		setGrid(grid);
	};

	const router = useRouter();
	const methods = useForm({
		defaultValues: {
			term: "",
		},
		mode: "onChange",
	});
	return (
		<DefaultLayout title='Sedher | Collaboration | SedherLuminaries'>
			<CollaborationWrapper getGrid={getGrid}>
				<div className='grid grid-cols-6 gap-8'>
					{/* <section className='col-span-2 space-y-6'>
						<CollaborationNav
							title='My Sedher Luminaries'
							navigations={navigations}
						/>
					</section> */}
					{/* <section className='col-span-4 space-y-6'>
						<WhiteWrapper className='flex items-center justify-between'>
							<div
								title='Request for Proposal'
								className='font-semibold text-lg text-dark-900'>
								Sedher Luminaries
							</div>
							<Button
								icon='plus'
								size='sm'
								className='w-[234px]'
								onClick={() =>
									router.push("/collaboration/sedher-h2h-commerce/create")
								}>
								Create Luminaries
							</Button>
						</WhiteWrapper>

						<WhiteWrapper>
							<FormProvider {...methods}>
								<form action=''>
									<div
										title='Request for Proposal'
										className='font-semibold text-lg text-dark-900'>
										Search for Sedher Luminaries
									</div>
									<Input type='search' placeholder='This is placeholder' />
									<p className='text-sm text-dark-100 mt-2'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
									</p>
								</form>
							</FormProvider>
						</WhiteWrapper>

						<GridContainer grid={grid}>
							{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
								(card) => (
									<LuminariesCard key={card} />
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

export default SedherLuminaries;

// SedherLuminaries.defaultProps = {
// 	navigations: [
// 		{
// 			name: "Active Luminaries",
// 			href: "/collaboration/sedher-luminaries/active",
// 			count: 45,
// 			// query: "?t=product",
// 		},
// 		{
// 			name: "Completed Luminaries ",
// 			href: "/collaboration/sedher-luminaries/completed",
// 			count: 45,
// 		},
// 		{
// 			name: "Cancelled Luminaries ",
// 			href: "/collaboration/sedher-luminaries/cancelled",
// 			count: 45,
// 		},
// 	],
// };
export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
