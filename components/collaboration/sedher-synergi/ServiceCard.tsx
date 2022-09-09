import Avatar from "@/components/global/Avatar";
import Button from "@/components/global/Button";
import StatusPill from "@/components/global/StatusPill";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import Link from "next/link";
import React from "react";

const ServiceCard = () => {
	return (
		<WhiteWrapper>
			<div className='space-y-7'>
				<div className='flex  justify-between'>
					<StatusPill
						text='Service'
						bg='#FF39561A'
						textColor='#FF3956'
						statusStyle=' font-semibold font-archivo flex justify-between items-center '
					/>
					<span className='text-[#616A6A] text-sm font-normal'>
						Friday 13 June
					</span>
				</div>
				<div className='flex  gap-3 mb-3'>
					<Avatar
						href='/connection/1'
						shape='square'
						size={99}
						name='Thomas clinics'
					/>
					<div className='w-full flex justify-between'>
						<div>
							<Link href='/connection/1'>
								<a className='font-semibold text-xl text-[#2A2069] hover:underline'>
									Thomas clinics
								</a>
							</Link>
							<div className=' text-dark-400 text-base font-normal font-epilogue text-dark-100'>
								Dental clinics
							</div>
							<div className='text-base font-normal text-accents-brown'>
								Patient care centres
							</div>
						</div>
					</div>
				</div>
				<Button
					theme='plain'
					size='sm'
					className=' w-full text-primary border  border-[#DDE4F6]'>
					view profile
				</Button>
			</div>
		</WhiteWrapper>
	);
};

export default ServiceCard;
