import Button from "@/components/global/Button";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import Image from "next/image";
import React from "react";

const CartItems = () => {
	return (
		<WhiteWrapper className='!mt-8 st'>
			<div className='flex justify-between space-x-5 w-full'>
				<div className='w-[300px] min-w-[300px]'>
					<Image
						className='w-full'
						src='/assets/images/collaborate.png'
						width={"100%"}
						height={"100%"}
						layout='responsive'
					/>
				</div>
				<div className='space-y-2 w-[100%] '>
					<h3 className='text-[#101C1D] font-semibold font-archivo text-2xl'>
						1600 W Universal Machining Centre
					</h3>
					<p className='font-medium text-neutral-80 text-base'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
						pulvinar velit cras tortor at blandit tempus. Lorem ipsum dolor sit
						amet, consectetur adipiscing elit. Tellus pulvinar velit cras tortor
						at blandit tempus.
					</p>
					<h5 className='text-[#101C1D] font-semibold text-base'>
						NGN 300,000.00
					</h5>
					<div className='flex justify-between gap-5'>
						<Button className='w-full' theme='outline'>
							Save
						</Button>
						<Button className='w-full' theme='outline'>
							Cancel
						</Button>
					</div>
				</div>
			</div>
		</WhiteWrapper>
	);
};

export default CartItems;
