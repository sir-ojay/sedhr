import ServiceCard from "@/components/collaboration/sedher-synergi/ServiceCard";
import GoBackButton from "@/components/global/GoBackButton";
import LabelValue from "@/components/global/LabelValue";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { requireAuthentication } from "hoc/requireAuthentication";
import { GetServerSideProps } from "next";
import React from "react";

const Detail = () => {
	return (
		<DefaultLayout>
			<div className='space-y-8'>
				<GoBackButton
					label='Quis amet rutrum sem.'
					desc='Ensectetur adipiscing elit. Odio ullamcorper sed urna'
				/>
			</div>
			<div className='grid grid-cols-6 gap-8'>
				<section className='col-span-4 space-y-6'>
					<WhiteWrapper>
						<div className='space-y-4'>
							<h4 className='font-semibold text-xl font-archivo text-[#2A2069]'>
								Quis amet rutrum sem.
							</h4>
							<p className='text-dark-100 leading-8'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Imperdiet at egestas pellentesque et tristique tellus iaculis
								at. Sem erat a ultrices duis nibh. Commodo vestibulum vulputate
							</p>
						</div>
					</WhiteWrapper>
					<WhiteWrapper>
						<div className='space-y-4'>
							<h4 className='font-semibold text-xl font-archivo text-black'>
								Patient Details
							</h4>
							<div className='space-y-4'>
								<LabelValue label='Patient name' value='Convallis.' />
								<LabelValue label='condition' value='Ndfergsffdcc.' />
								<LabelValue label='gender' value='Male.' />
								<LabelValue label='age ' value='300.' />
								<LabelValue label='Image ' value='View image.' isLink />
							</div>
						</div>
					</WhiteWrapper>
					<WhiteWrapper>
						<div className='space-y-4'>
							<h4 className='font-semibold text-xl font-archivo text-black'>
								Patient Details
							</h4>
							<div className='space-y-4'>
								<LabelValue label='Patient name' value='Convallis.' />
								<LabelValue label='condition' value='Ndfergsffdcc.' />
								<LabelValue label='gender' value='Male.' />
								<LabelValue label='age ' value='300.' />
								<LabelValue label='Image ' value='View image.' isLink />
							</div>
						</div>
					</WhiteWrapper>
				</section>
				<section className='col-span-2 space-y-6'>
					<WhiteWrapper>
						<ServiceCard />
					</WhiteWrapper>
				</section>
			</div>
		</DefaultLayout>
	);
};

export default Detail;
export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
