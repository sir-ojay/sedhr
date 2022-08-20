import Button from "@/components/global/Button";
import GoBackButton from "@/components/global/GoBackButton";
import ListNav from "@/components/global/ListNav";
import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";

type CardProps = {
	navigations: {
		name: string;
		href: string;
		query: string;
		count: number;
	}[];
};
const Card = ({ navigations }: CardProps) => {
	return (
		<DefaultLayout>
			<div className='space-y-8'>
				<div className='flex justify-between items-center'>
					<GoBackButton label='Payment Method ' />
					<Button
						theme='plain'
						icon='video2'
						size='sm'
						className='w-[210px] h-fit py-3 bg-primary rounded-[5px] text-white'>
						Watch Tutorial
					</Button>
				</div>
				<ListNav navs={navigations} type='slug' />
			</div>
		</DefaultLayout>
	);
};

export default Card;
Card.defaultProps = {
	navigations: [
		{
			name: "Card",
			href: "/collaboration/sedher-h2h-commerce/thomas-clinics/checkout/payment/card",
		},
		{
			name: "Bank Transfer",
			href: "/collaboration/sedher-h2h-commerce/thomas-clinics/checkout/payment/bank-transfer",
		},
	],
};
