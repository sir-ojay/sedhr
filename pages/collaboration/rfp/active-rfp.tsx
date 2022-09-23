import React from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import ListNav from "@/components/global/ListNav";
import H2HCard from "@/components/collaboration/sedher-h2h-commerce/H2HCard";
import GoBackButton from "@/components/global/GoBackButton";
import Button from "@/components/global/Button";
import RFPCard from "@/components/collaboration/rfp/RFPCard";
import { GetServerSideProps } from "next";
import { requireAuthentication } from "hoc/requireAuthentication";

type ActiveRFPProps = {
	navigations: {
		name: string;
		href: string;
		query: string;
		count: number;
	}[];
};
const ActiveRFP = ({ navigations }: ActiveRFPProps) => {
	return (
		<DefaultLayout>
			<div className='space-y-8'>
				<GoBackButton label='My request for proposal' />

				<ListNav type='slug' navs={navigations} />

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

				<section className='grid md:grid-cols-2 xl:grid-cols-3 gap-8'>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((card) => (
						<RFPCard key={card} type='active' />
					))}
				</section>
			</div>
		</DefaultLayout>
	);
};

export default ActiveRFP;
ActiveRFP.defaultProps = {
	navigations: [
		{
			name: "Active RFP",
			href: "/collaboration/rfp/active-rfp",
		},
		{
			name: "Complete RFP",
			href: "/collaboration/rfp/complete-rfp",
		},
		{
			name: "Saved RFP",
			href: "/collaboration/rfp/saved-rfp",
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
