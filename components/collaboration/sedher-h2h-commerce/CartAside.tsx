import Button from "@/components/global/Button";
import LabelValue from "@/components/global/LabelValue";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import React from "react";

const CartAside = () => {
	const router = useRouter();

	return (
		<WhiteWrapper>
			<div className='space-y-4'>
				<h4 className='font-semibold text-xl font-archivo text-black'>
					Sedher H2H Commerce
				</h4>
				<div className='space-y-6'>
					<div className='bg-[#F5FBFE] py-2 px-3'>
						<h6 className='text-sm font-medium text-neutral-80 font-archivo'>
							Total Amount 80%
						</h6>
						<h4 className='text-2xl font-semibold font-archivo'>
							NGN 300,000,000.00
						</h4>
					</div>
					<hr />
					<LabelValue label='Sub Total' value='NGN 35,000.00' />
					<LabelValue label='Sub Total' value='NGN 35,000.00' />

					<hr />
					<div className='flex justify-between items-center'>
						<h5 className='font-semibold text-[#101C1D] text-xl font-archivo '>
							Total
						</h5>
						<p className='font-semibold text-neutral-80 text-base font-archivo'>
							<span className='text-[#44BE9D]'>NGN290,000,000.00</span>
						</p>
					</div>
					<Button
						onClick={() =>
							router.push(
								"/collaboration/sedher-h2h-commerce/thomas-clinics/checkout"
							)
						}
						className='w-full'
						size='lg'>
						Checkout
					</Button>
					<p className='text-center text-[#696866]'>
						Vestibulum iaculis sagittis massa.
					</p>
					<div className='flex justify-between  w-full'>
						<div className='w-[40px] min-w-[40px]'>
							<Image
								className='w-full'
								src='/assets/images/money.png'
								width={24}
								height={24}
								// layout='responsive'
							/>
						</div>
						<div>
							<h5 className='font-archivo text-[#3772FF] font-semibold text-sm '>
								30 day money back guarantee
							</h5>
							<p className=' text-[#616A6A] font-normal text-sm font-archivo'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. A proin
								hac feugiat facilisi aliquet adipiscing.
							</p>
						</div>
					</div>
					<div>
						<h5 className='font-archivo text-[#1E1709] font-medium text-base '>
							Payment service
						</h5>
						<div className='flex gap-4 items-center mt-3 '>
							<div className='w-[124px] '>
								<Image
									className='w-full '
									src='/assets/images/flutterwave.png'
									width={"100%"}
									height={35}
									// layout='responsive'
								/>
							</div>
							<div className='w-[68px] h-[100%] '>
								<Image
									className='w-full'
									src='/assets/images/paystack.png'
									width={68}
									height={35}
									// layout='responsive'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</WhiteWrapper>
	);
};

export default CartAside;
