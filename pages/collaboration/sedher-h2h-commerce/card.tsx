import CartAside from "@/components/collaboration/sedher-h2h-commerce/CartAside";
import Button from "@/components/global/Button";
import GoBackButton from "@/components/global/GoBackButton";
import LabelValue from "@/components/global/LabelValue";
import ListNav from "@/components/global/ListNav";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import Image from "next/image";
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
				<ListNav type='slug' navs={navigations} />
				<div className='grid grid-cols-6 gap-8'>
					<section className='col-span-4 space-y-8'>
						<section className='space-y-8'>
							<WhiteWrapper>
								<div className='space-x-4'>
									<div className='flex justify-between'>
										<h3 className='font-bold text-2xl font-archivo text-[#101C1D]'>
											Delivery country
										</h3>
										<Button className='w-[171px]' theme='outline'>
											Select
										</Button>
									</div>
									<div className='flex items-center'>
										<Image
											className='w-full'
											src='/assets/images/flags.png'
											width={24}
											height={16}
											// layout='responsive'
										/>
										<h5 className='ml-3'>Nigeria</h5>
									</div>
								</div>
							</WhiteWrapper>
							<WhiteWrapper>
								<div className='space-y-4'>
									<div className='flex justify-between'>
										<h3 className='font-semibold text-lg font-archivo text-[#000000]'>
											Address Details
										</h3>
										<Button className='w-[171px]' theme='outline'>
											Change
										</Button>
									</div>
									<LabelValue label='Name' value='John Does' />
									<LabelValue label='Address' value='2 fakeye obakabo lekki' />
									<LabelValue label='State' value='Lagos' />
									<LabelValue label='Country' value='Nigeria' />
									<LabelValue label='Phone number' value='08103538383' />
								</div>
							</WhiteWrapper>
							<WhiteWrapper>
								<div className='space-y-4'>
									<div className='flex justify-between'>
										<h3 className='font-bold text-lg font-archivo text-[#101C1D]'>
											Payment Card
										</h3>
										<Button className='w-[171px]' theme='outline'>
											Select
										</Button>
									</div>
									<Image
										className='w-full'
										src='/assets/images/card.png'
										width={251}
										height={144}
										// layout='responsive'
									/>
								</div>
							</WhiteWrapper>
						</section>
					</section>
					<div className='col-span-2 '>
						<CartAside />
					</div>
				</div>
			</div>
		</DefaultLayout>
	);
};

export default Card;

Card.defaultProps = {
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
			href: "/collaboration/sedher-h2h-commerce/t",
		},
		{
			name: "Others",
			href: "/collaboration/sedher-h2h-commerce/other",
		},
	],
};
