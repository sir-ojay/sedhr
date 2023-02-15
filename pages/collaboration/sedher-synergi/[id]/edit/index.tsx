import NotificationCard from "@/components/collaboration/sedher-synergi/NotificationCard";
import Button from "@/components/global/Button";
import GoBackButton from "@/components/global/GoBackButton";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import AdditionalDetailsCard from "@/components/sedher-universe/AdditionalDetailsCard";
import DefaultLayout from "@/layouts/DefaultLayout";
import { requireAuthentication } from "hoc/requireAuthentication";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

import React from "react";

const Edit = () => {
	const router = useRouter();

	return (
		<DefaultLayout>
			<div className='space-y-8'>
				<GoBackButton
					label='Sedher Synergi'
					desc='Ensectetur adipiscing elit. Odio ullamcorper sed urna'
				/>
			</div>
			<div className='grid grid-cols-6 gap-8'>
				<section className='col-span-4 space-y-6'>
					<WhiteWrapper>
						<div className='flex justify-between space-x-8'>
							<div className=' w-[182px]'>
								<div className='rounded-xl mb-5'>
									<Image
										width={182}
										height={132}
										// layout='responsive'
										src='/assets/images/productCard.jpg'
										alt='post'
									/>
								</div>
								<div>
									<Button
										theme='plain'
										size='sm'
										className=' w-full text-primary border  border-[#DDE4F6]'>
										Edit Details
									</Button>
								</div>
							</div>
							<div className='flex-1'>
								<div className=' flex justify-between bg-[#F5FBFE] p-[15px]'>
									<div className='flex-1  pl-4'>
										<div className='flex space-x-4'>
											<div>
												<Image
													width={24}
													height={24}
													// layout='responsive'
													src='/assets/icons/notify.svg'
													alt='notify'
												/>
											</div>
											<div>
												<div className='mb-3'>
													<h6 className='text-[#7C8493] font-archivo font-normal '>
														Working Time
													</h6>
													<p className='text-[#2A2069] font-medium font-epilogue text-sm'>
														Mon -Sat(9:00Am-10:00pm)
													</p>
												</div>
											</div>
										</div>
										<div className='flex space-x-4'>
											<div>
												<Image
													width={24}
													height={24}
													// layout='responsive'
													src='/assets/icons/notify.svg'
													alt='notify'
												/>
											</div>
											<div>
												<div className='mb-3'>
													<h6 className='text-[#7C8493] font-archivo font-normal '>
														Created on
													</h6>
													<p className='text-[#2A2069] font-medium font-epilogue text-sm'>
														April 20, 2019
													</p>
												</div>
											</div>
										</div>
										<div className='flex space-x-4'>
											<div>
												<Image
													width={24}
													height={24}
													// layout='responsive'
													src='/assets/icons/notify.svg'
													alt='notify'
												/>
											</div>
											<div>
												<div className='mb-3'>
													<h6 className='text-[#7C8493] font-archivo font-normal '>
														Patients
													</h6>
													<h3 className='text-[#2A2069] font-medium font-epilogue text-sm'>
														400
													</h3>
												</div>
											</div>
										</div>
									</div>
									<div className='w-[1px] h-50 bg-[#B8C9C9]' />
									<div className='flex-1  pl-4 pr-4'>
										<div className='flex space-x-4'>
											<div>
												<Image
													width={24}
													height={24}
													// layout='responsive'
													src='/assets/icons/star.svg'
													alt='star'
												/>
											</div>
											<div className='flex-1'>
												<div className='mb-3'>
													<h6 className='text-[#7C8493] font-archivo font-normal '>
														Rate
													</h6>
													<p className='text-[#2A2069] font-medium font-epilogue text-sm'>
														<span className='text-[#FFCF14]'>5.0</span> (67
														reviews)
													</p>
												</div>
												<div className='mb-3'>
													<Button
														theme='plain'
														size='sm'
														className=' w-full text-primary border  border-[#DDE4F6]'>
														Edit Calender
													</Button>
												</div>
												<div className='mb-3'>
													<Button
														onClick={() =>
															router.push(
																"/collaboration/sedher-synergi/1/edit/view"
															)
														}
														className='w-full'>
														View appointment
													</Button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</WhiteWrapper>
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
					<div className='flex items-center gap-3'>
						<Button
							theme='plain'
							className='border-2 border-[#B8C9C9] rounded-full text-primary bg-tertiary'>
							upcoming Appointment
						</Button>
						<Button
							theme='plain'
							className='border-2 border-[#B8C9C9] rounded-full text-[#4C4475]'>
							Past Appointment
						</Button>
						<Button
							theme='plain'
							className='border-2 border-[#B8C9C9] rounded-full text-[#4C4475]'>
							Cancel Appointment
						</Button>
					</div>
					<WhiteWrapper>
						<div className='space-y-4'>
							<h4 className='font-semibold text-xl font-archivo text-[#2A2069]'>
								Upcoming Appointment
							</h4>
							<div className='bg-[#F5FBFE] p-4 '>
								<WhiteWrapper>
									<div className='flex justify-between'>
										<div>
											<h4 className='text-[#2A2069] text-2xl font-semibold'>
												26 Nov 20
											</h4>
											<h5 className='text-sm text-[#4C4475] font-medium'>
												10:00 PM
											</h5>
										</div>
										<div className='w-[1px] h-50 bg-[#B8C9C9]' />

										<div>
											<h4 className='text-sm text-[#4C4475] font-medium'>
												Service Name
											</h4>
											<h5 className='text-[#2A2069] text-2xl font-semibold'>
												Quis amet rutr....
											</h5>
										</div>
										<div>
											<h4 className='text-sm text-[#4C4475] font-medium'>
												Use for
											</h4>
											<h5 className='text-[#2A2069] text-2xl font-semibold'>
												2Quis avfv .
											</h5>
										</div>
										<Button
											href='/connection/user-profile/2'
											theme='plain'
											size='sm'
											className=' text-primary text-[16px]'>
											View
										</Button>
									</div>
								</WhiteWrapper>
							</div>
						</div>
					</WhiteWrapper>
				</section>
				<section className='col-span-2 space-y-6'>
					<WhiteWrapper>
						<AdditionalDetailsCard type='account' />
					</WhiteWrapper>
					<WhiteWrapper>
						<NotificationCard />
					</WhiteWrapper>
				</section>
			</div>
		</DefaultLayout>
	);
};

export default Edit;
export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
