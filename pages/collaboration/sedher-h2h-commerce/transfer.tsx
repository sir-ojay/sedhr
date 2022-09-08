import CartAside from "@/components/collaboration/sedher-h2h-commerce/CartAside";
import Button from "@/components/global/Button";
import GoBackButton from "@/components/global/GoBackButton";
import Input from "@/components/global/Input";
import LabelValue from "@/components/global/LabelValue";
import ListNav from "@/components/global/ListNav";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import Image from "next/image";
import React from "react";

type BankTransferProps = {
	navigations: {
		name: string;
		href: string;
		query: string;
		count: number;
	}[];
};
const BankTransfer = ({ navigations }: BankTransferProps) => {
	
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
				<ListNav type='slug' navs={navigations} />
				<div className='grid grid-cols-6 gap-8'>
					<section className='col-span-4 '>
						<WhiteWrapper>
							<div className='space-x-4 '>
								<div className='pb-6'>
									<h3 className=' text-base font-semibold font-archivo text-[#101C1D]'>
										Bank Transfer
									</h3>
									<p className=' text-sm text-neutral-80 font-normal font-archivo'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Eros a phasellus egestas ut tincidunt. Ut.
									</p>
								</div>
							</div>
							<hr />
							<div className='my-10 '>
								<div className='mt-8 bg-[#F5FBFE] p-4 '>
									<h3 className=' text-base font-semibold font-archivo text-[#0C1938]'>
										Transfer details
									</h3>

									<div className='flex pt-4 justify-between'>
										<div className='pr-20'>
											<h4 className='font-archivo font-medium text-base text-[#515B6F]'>
												Account number
											</h4>
											<h6 className='font-archivo font-semibold text-base text-[#0C1938]'>
												0566777888
											</h6>
										</div>
										<div className='border-l-2 px-20 border-[#D3D6DD]'>
											<h4 className='font-archivo font-medium text-base text-[#515B6F]'>
												Bank Name
											</h4>
											<h6 className='font-archivo font-semibold text-base text-[#0C1938]'>
												Firstbank
											</h6>
										</div>
										<div className='border-l-2 px-20 border-[#D3D6DD]'>
											<h4 className='font-archivo font-medium text-base text-[#515B6F]'>
												Account name
											</h4>
											<h6 className='font-archivo font-semibold text-base text-[#0C1938]'>
												Sehder healthcare
											</h6>
										</div>
									</div>
								</div>
							</div>
							<Input label='Bank Name' placeholder='This is placeholder' />
							<div className='flex justify-between pt-6 space-x-12'>
								<div className='w-1/2'>
									<Input
										label='Recepit number'
										placeholder='This is placeholder'
									/>
								</div>
								
								<div className='w-1/2'>
									<Input label='Time range' placeholder='This is placeholder' />
								</div>
							</div>
							<div className='flex items-center pt-6 justify-between'>
								<h4 className='font-archivo font-semibold text-base text-[#202430]'>
									Attach image of the recepit
								</h4>
								<div className='w-1/3'>
									<Input type='file' />
								</div>
							</div>
						</WhiteWrapper>
						<p className='text-right p-6 font-archivo font-medium text-sm text-[#515B6F]'>
							By clicking make payment button you agree with out term and
							condition
						</p>
					</section>
					<div className='col-span-2 '>
						<CartAside />
					</div>
				</div>
			</div>
		</DefaultLayout>
	);
};

export default BankTransfer;

BankTransfer.defaultProps = {
	navigations: [
		{
			name: "Card",
			href: "/collaboration/sedher-h2h-commerce/card",
		},
		{
			name: "Bank Transfer",
			href: "/collaboration/sedher-h2h-commerce/transfer",
		},
		{
			name: "Sedher Loan",
			href: "/collaboration/sedher-h2h-commerce/1",
		},
		{
			name: "Others",
			href: "/collaboration/sedher-h2h-commerce/gidy",
		},
	],
};
