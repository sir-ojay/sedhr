import CollaborationNav from "@/components/collaboration/CollaborationNav";
import CollaborationWrapper from "@/components/collaboration/CollaborationWrapper";
import H2HCard from "@/components/collaboration/sedher-h2h-commerce/H2HCard";
import Button from "@/components/global/Button";
import GridContainer from "@/components/global/GridContainer";
import Input from "@/components/global/Input";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { requireAuthentication } from "hoc/requireAuthentication";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

type SedherH2hCommerceProps = {
	navigations: {
		name: string;
		href: string;
		query: string;
		count: number;
	}[];
	grid: number;
};

const SedherH2hCommerce = ({ navigations }: SedherH2hCommerceProps) => {
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
		<DefaultLayout title='Sedher | Collaboration | SedherH2hCommerce'>
			<CollaborationWrapper getGrid={getGrid}>
				<div className='grid grid-cols-6 gap-8'>
					<section className='col-span-2 space-y-6'>
						<CollaborationNav
							title='My Sedher H2H Commerce'
							navigations={navigations}
						/>
					</section>
					<section className='col-span-4 space-y-6'>
						<WhiteWrapper className='flex items-center justify-between'>
							<div
								title='Request for Proposal'
								className='font-semibold text-lg text-dark-900'>
								Sedher H2H Commerce
							</div>
							<Button icon='plus' size='sm' className='w-[234px]'>
								Create H2H
							</Button>
						</WhiteWrapper>

						<WhiteWrapper>
							<FormProvider {...methods}>
								<form action=''>
									<div
										title='Request for Proposal'
										className='font-semibold text-lg text-dark-900'>
										Search for Sedher H2H Commerce
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
									<H2HCard key={card} type='all' />
								)
							)}
						</GridContainer>
					</section>
				</div>
			</CollaborationWrapper>
		</DefaultLayout>
	);
};

export default SedherH2hCommerce;

SedherH2hCommerce.defaultProps = {
	navigations: [
		{
			name: "Saved H2H",
			href: "/collaboration/sedher-h2h-commerce/saved-h2h",
			count: 45,
			// query: "?t=product",
		},
		{
			name: "Cancel H2H",
			href: "/collaboration/sedher-h2h-commerce/cancel-h2h",
			count: 45,
		},
		{
			name: "Complete H2H",
			href: "/collaboration/sedher-h2h-commerce/complete-h2h",
			count: 45,
		},
	],
};
export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
