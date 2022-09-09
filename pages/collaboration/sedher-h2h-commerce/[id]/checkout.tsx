import React from "react";
import { Router, useRouter } from "next/router";
import DefaultLayout from "@/layouts/DefaultLayout";
import GoBackButton from "@/components/global/GoBackButton";
import CheckOutCard from "@/components/collaboration/sedher-h2h-commerce/CheckOutCard";
import Button from "@/components/global/Button";

const CheckOut = () => {
	const router = useRouter();

	return (
		<DefaultLayout>
			<div className='space-y-8'>
				<GoBackButton label='Select your method' />
				<CheckOutCard
					title='Pick up'
					body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ullamcorper sed urna sodales blandit consectetur frin gilla Turpis vulputate in nibh mi tempor, nec elit. Tincidunt purus eros, massa '
				/>
				<CheckOutCard
					title='Shippment'
					body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ullamcorper sed urna sodales blandit consectetur frin gilla Turpis vulputate in nibh mi tempor, nec elit. Tincidunt purus eros, massa '
				/>
				<div className='flex justify-between !mt-[47px]'>
					<Button onClick={() => router.back()} theme='outline'>
						Cancel
					</Button>
					<Button
						onClick={() =>
							router.push("/collaboration/sedher-h2h-commerce/card")
						}>
						Continue
					</Button>
				</div>
			</div>
		</DefaultLayout>
	);
};

export default CheckOut;
