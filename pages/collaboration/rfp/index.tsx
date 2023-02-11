import CollaborationNav from "@/components/collaboration/CollaborationNav";
import CollaborationWrapper from "@/components/collaboration/CollaborationWrapper";
import RFPCard from "@/components/collaboration/rfp/RFPCard";
import Button from "@/components/global/Button";
import GridContainer from "@/components/global/GridContainer";
import Input from "@/components/global/Input";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useGetRFPsQuery } from "@/services/collaborations";
import { RFP } from "@/types/collaboration";
import { requireAuthentication } from "hoc/requireAuthentication";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

type RFPProps = {
	navigations: {
		name: string;
		href: string;
		query: string;
		count: number;
	}[];
	grid: number;
	RFPs: RFP[];
};

const RFPPage = ({ navigations }: RFPProps) => {
	const [grid, setGrid] = useState(2);
	const [rfpData, setRFPData] = useState<RFP[]>([]);

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

	const token: any = Cookies.get("sedherToken");

	const { data, error, isLoading, isSuccess, isFetching } = useGetRFPsQuery({
		token,
	});

	useEffect(() => {
		console.log(data);
		data && setRFPData(data.data as RFP[]);
	}, [isSuccess, data]);

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
								onClick={() => router.push("/collaboration/rfp/create?step=1")}
								size='sm'
								className='w-[234px]'>
								Create RFP
							</Button>
						</WhiteWrapper>

						{/* <div className='flex items-center gap-3'>
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
						</div> */}

						<WhiteWrapper>
							<FormProvider {...methods}>
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
							</FormProvider>
						</WhiteWrapper>

						{isLoading && (
							<GridContainer grid={grid}>
								{[1, 2, 3, 4, 5, 6].map((card) => (
									<WhiteWrapper key={card} className='h-[400px] w-full' />
								))}
							</GridContainer>
						)}

						<GridContainer grid={grid}>
							{rfpData?.map((card) => (
								<RFPCard key={card._id} {...card} />
							))}
						</GridContainer>
					</section>
				</div>
			</CollaborationWrapper>
		</DefaultLayout>
	);
};

export default RFPPage;

RFPPage.defaultProps = {
	navigations: [
		{
			name: "Active RFP",
			href: "/collaboration/rfp/active-rfp",
			count: "",
		},
		{
			name: "Complete RFP",
			href: "/collaboration/rfp/complete-rfp",
			count: "",
		},
		{
			name: "Saved RFP",
			href: "/collaboration/rfp/saved-rfp",
			count: "",
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
