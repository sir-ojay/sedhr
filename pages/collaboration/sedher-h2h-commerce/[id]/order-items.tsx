import React from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import GoBackButton from "@/components/global/GoBackButton";
import CartItems from "@/components/collaboration/sedher-h2h-commerce/CartItems";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import CartAside from "@/components/collaboration/sedher-h2h-commerce/CartAside";

const OrderItems = () => {
	return (
		<DefaultLayout>
			<div className='space-y-8'>
				<GoBackButton label='My Cart Page' />
				<div className='grid grid-cols-6 gap-8'>
					<section className='col-span-4 space-y-8'>
						<section className='space-y-8'>
							{[1, 2].map((card) => (
							<CartItems key={card}/>
						))}
						<WhiteWrapper>
							<div className="flex justify-between items-center">
							<h5 className="font-semibold text-neutral-80 text-xl font-archivo " >2 Item Added</h5>
							<p className="font-semibold text-neutral-80 text-xl font-archivo">Total Amount <span className="text-[#44BE9D]">NGN 4,000,000:00</span></p>
							</div>
						</WhiteWrapper>
						</section>
					</section>
					<div className='col-span-2 '>
						<CartAside/>
					</div>
				</div>
			</div>
		</DefaultLayout>
	);
};

export default OrderItems;
