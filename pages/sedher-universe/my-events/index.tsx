import AdjustableProfileCard from "@/components/global/AdjustableProfileCard";
import Button from "@/components/global/Button";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import SedherUniverseWrapper from "@/components/sedher-universe/SedherUniverseWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { requireAuthentication } from "hoc/requireAuthentication";
import { GetServerSideProps } from "next";
import React from "react";

const MyGroups = () => {
	return (
		<DefaultLayout title='Sedher | Sedher universe | My Events'>
			<SedherUniverseWrapper>
				<section className='space-y-5'>
					<WhiteWrapper>
						<span className='font-semibold text-dark-900'>Event for you</span>
					</WhiteWrapper>
					<div className='flex justify-between items-center'>
						<div className='flex items-center gap-3'>
							<Button
								theme='plain'
								className='border-2 border-[#B8C9C9] rounded-full text-primary bg-tertiary'>
								Events
							</Button>
							<Button
								theme='plain'
								className='border-2 border-[#B8C9C9] rounded-full text-[#4C4475]'>
								My Events
							</Button>
						</div>
						<Button>Create Event</Button>
					</div>
					<section className='space-y-3'>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
							(card) => (
								<AdjustableProfileCard
									key={card}
									name='Adagio CME-CPD Training Service'
									description='Wed, Jun 1 - Fri, Jun 10 '
									image='/assets/images/square-avatar-1.png'
									cardType='event'
									grid={1}
									href='/sedher-universe/my-events/Adagio CME-CPD Training Service'
								/>
							)
						)}
					</section>
				</section>
			</SedherUniverseWrapper>
		</DefaultLayout>
	);
};

export default MyGroups;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
