import React from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import H2HCard from "@/components/collaboration/sedher-h2h-commerce/H2HCard";
import GoBackButton from "@/components/global/GoBackButton";
import CartItems from "@/components/collaboration/sedher-h2h-commerce/CartItems";

const OrderItems = () => {
	return (
		<DefaultLayout>
			<div className='space-y-8'>
				<GoBackButton label='My Cart Page' />
				<div className='grid grid-cols-6 gap-8'>
					<section className='col-span-4 space-y-8'>
						<section className='space-y-8'>
							<CartItems />
						</section>
					</section>
					<div className='col-span-2 space-y-8'></div>
				</div>
			</div>
		</DefaultLayout>
	);
};

export default OrderItems;
