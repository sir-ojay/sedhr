import CollaborationWrapper from "@/components/collaboration/CollaborationWrapper";
import RFPCard from "@/components/collaboration/rfp/RFPCard";
import Avatar from "@/components/global/Avatar";
import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import RadioInputGroup from "@/components/global/RadioInputGroup";
import StatusPill from "@/components/global/StatusPill";
import Switch from "@/components/global/Switch";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { requireAuthentication } from "hoc/requireAuthentication";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";

const index = () => {
	const router = useRouter();
	const methods = useForm({
		defaultValues: {
			term: "",
		},
		mode: "onChange",
	});
	return (
		<DefaultLayout title='Sedher | Collaboration | create RFP'>
			<FormProvider {...methods}>
				<CollaborationWrapper showHeader={false}>
					<WhiteWrapper className='flex items-center justify-between w-full'>
						<div
							title='Request for Proposal'
							className='font-semibold text-lg text-dark-900 w-full'>
							Request for Proposal
						</div>
					</WhiteWrapper>

					<div className='grid grid-cols-6 gap-8'>
						<section className='col-span-2 space-y-8'>
							<div className='flex items-center gap-3'>
								<Button
									theme='plain'
									className='border-2 border-[#B8C9C9] rounded-full text-primary bg-tertiary'>
									All
								</Button>
								<Button
									theme='plain'
									className='border-2 border-[#B8C9C9] rounded-full text-[#4C4475]'>
									Product RFP
								</Button>
								<Button
									theme='plain'
									className='border-2 border-[#B8C9C9] rounded-full text-[#4C4475]'>
									Service RFP
								</Button>
							</div>

							<section className='space-y-8'>
								{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
									(card) => (
										<RFPCard
											key={card}
											_id={""}
											userId={""}
											productName={""}
											category={""}
											description={""}
											proposal={{
												description: [],
												timelines: [],
											}}
											communications={{
												channels: [],
												responseToEmail: "",
												responseToFeedback: "",
												note: "",
											}}
											timelines={[]}
											paymentDetails={{
												paymentType: "FIXED",
												prices: [],
											}}
											code={0}
											status={"pending"}
											createdAt={""}
											updatedAt={""}
										/>
									)
								)}
							</section>
						</section>
						<section className='col-span-4 space-y-8'>
							<article className='bg-primary p-4 rounded-xl space-y-6'>
								<div className='flex items-center justify-between'>
									<h3 className='text-white font-semibold'>
										Learning how Request for proposal(RFP) Works
									</h3>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M5.15115 5.1515C5.37618 4.92654 5.68135 4.80016 5.99955 4.80016C6.31775 4.80016 6.62291 4.92654 6.84795 5.1515L11.9995 10.3031L17.1511 5.1515C17.2618 5.03689 17.3943 4.94547 17.5407 4.88258C17.6871 4.81969 17.8445 4.78659 18.0039 4.7852C18.1632 4.78382 18.3212 4.81418 18.4687 4.87452C18.6162 4.93485 18.7501 5.02396 18.8628 5.13663C18.9755 5.2493 19.0646 5.38328 19.1249 5.53076C19.1853 5.67823 19.2156 5.83625 19.2142 5.99558C19.2129 6.15492 19.1798 6.31238 19.1169 6.45879C19.054 6.60519 18.9626 6.73761 18.8479 6.8483L13.6963 11.9999L18.8479 17.1515C19.0665 17.3778 19.1875 17.6809 19.1848 17.9956C19.182 18.3102 19.0558 18.6112 18.8333 18.8337C18.6108 19.0562 18.3099 19.1824 17.9952 19.1851C17.6806 19.1878 17.3775 19.0669 17.1511 18.8483L11.9995 13.6967L6.84795 18.8483C6.62163 19.0669 6.3185 19.1878 6.00387 19.1851C5.68923 19.1824 5.38826 19.0562 5.16577 18.8337C4.94328 18.6112 4.81707 18.3102 4.81434 17.9956C4.81161 17.6809 4.93256 17.3778 5.15115 17.1515L10.3027 11.9999L5.15115 6.8483C4.92618 6.62327 4.7998 6.3181 4.7998 5.9999C4.7998 5.68171 4.92618 5.37654 5.15115 5.1515Z'
											fill='white'
										/>
									</svg>
								</div>

								<div className='flex justify-between items-end gap-20'>
									<p className='w-full max-w-[400px] text-sm text-white'>
										tristique tellus iaculis at. Sem erat a ultrices duis nibh.
										Commodo vestibulum vulputate malesuada mauris amet faucibus
										vitae. Fusce ut sed fermentum vitae, massa. Semper{" "}
									</p>
									<Button
										theme='plain'
										icon='video'
										size='sm'
										className='w-[210px] h-fit py-3 bg-white rounded-[5px] text-primary'>
										Watch Tutorial
									</Button>
								</div>
							</article>

							<WhiteWrapper className='space-y-6'>
								<div className='flex w-full gap-5'>
									<div>
										<Avatar name='Thomas clinics' rounded size={100} />
									</div>
									<div className='w-full space-y-2'>
										<div className='flex justify-between'>
											<h3 className='text-2xl font-semibold text-dark-900'>
												Thomas clinics
											</h3>
											<StatusPill
												text='Service'
												bg='#FF39561A'
												textColor='#FF3956'
											/>
										</div>
										<div className='text-lg space-x-3'>
											<span className='text-dark-100'>Dental clinics</span>
											<span className='text-[#F47D5B]'>
												Patient care centres{" "}
											</span>
										</div>
										<div className='text-base text-dark-100'>
											Friday 13 June
										</div>
										<Button
											theme='outline'
											onClick={() => router.push("/connection/1")}>
											view profile
										</Button>
									</div>
								</div>

								<hr />

								<div className='space-y-6'>
									<div className='flex justify-between'>
										<div className='text-xl font-semibold text-dark-900'>
											Quis amet rutrum sem.
										</div>
										<Switch label='Saved RFP' />
									</div>
									<p className='text-dark-100 leading-8'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Imperdiet at egestas pellentesque et tristique tellus
										iaculis at. Sem erat a ultrices duis nibh. Commodo
										vestibulum vulputate malesuada mauris amet faucibus vitae.
										Fusce ut sed fermentum vitae, massa. Semper tortor amet odio
										tellus lectus et sapien imperdiet. Nisl purus dictum
										malesuada malesuada maecenas fermentum egestas non. Iaculis
										molestie viverra gravida sed dui cras pulvinar ac mus. Neque
										nulla eu lectus eget nulla sed. Risus quam scelerisque
										mauris ipsum. Lobortis aliquam sollicitudin nisi, velit nibh
										morbi enim. Ac senectus et purus et sit. Neque viverra
										lacus, amet mattis maecenas id in nam. Posuere pharetra,
										massa dui lacus enim at pharetra. Commodo, cras consectetur
										nisl, justo, fermentum leo, fames ultrices habitant. Non
										etiam duis lacus, euismod ornare commodo varius. Auctor diam
										ornare sit tincidunt laoreet nunc a imperdiet lectus. Donec
										mattis ac lectus interdum interdum nec. Aliquet eu vitae sit
										nibh turpis tincidunt erat ultrices ut. Ante.
									</p>
								</div>

								<section className='bg-[#F5FBFE] p-5 rounded-xl space-y-6'>
									<div className='space-y-3'>
										<div className='font-semibold text-primary'>Criteria B</div>
										<p className='font-medium text-title'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Velit vehicula libero pharetra lectus ut vulputate
											porttitor lorem. Tincidunt turpis.
										</p>
										<div className='text-sm text-dark-100'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Velit vehicula
										</div>
										<div className='flex items-center justify-between'>
											<RadioInputGroup
												options={["Met", "Not Met"]}
												onChange={(e) => {}}
												name='1'
											/>
											<div className='flex p-3 gap-3.5 rounded bg-white'>
												<svg
													className='cursor-pointer'
													width='24'
													height='24'
													viewBox='0 0 24 24'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														d='M10 14.0004C10.3259 14.333 10.7148 14.5972 11.1441 14.7776C11.5734 14.958 12.0344 15.0509 12.5 15.0509C12.9656 15.0509 13.4266 14.958 13.8559 14.7776C14.2852 14.5972 14.6741 14.333 15 14.0004L19 10.0004C19.663 9.33734 20.0355 8.43806 20.0355 7.50038C20.0355 6.5627 19.663 5.66342 19 5.00038C18.337 4.33734 17.4377 3.96484 16.5 3.96484C15.5623 3.96484 14.663 4.33734 14 5.00038L13.5 5.50038'
														stroke='#7C8493'
														strokeWidth='2'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
													<path
														d='M14.0004 9.99973C13.6745 9.66713 13.2855 9.4029 12.8563 9.22252C12.427 9.04213 11.966 8.94922 11.5004 8.94922C11.0347 8.94922 10.5738 9.04213 10.1445 9.22252C9.71523 9.4029 9.32626 9.66713 9.00038 9.99973L5.00038 13.9997C4.33734 14.6628 3.96484 15.562 3.96484 16.4997C3.96484 17.4374 4.33734 18.3367 5.00038 18.9997C5.66342 19.6628 6.5627 20.0353 7.50038 20.0353C8.43806 20.0353 9.33734 19.6628 10.0004 18.9997L10.5004 18.4997'
														stroke='#7C8493'
														strokeWidth='2'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
												</svg>
												<div className='h-[20px] w-[1px] bg-dark-100'></div>
												<svg
													className='cursor-pointer'
													width='24'
													height='24'
													viewBox='0 0 24 24'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														d='M14.9997 7.00045L8.4997 13.5005C8.10188 13.8983 7.87838 14.4378 7.87838 15.0005C7.87838 15.5631 8.10188 16.1026 8.4997 16.5005C8.89753 16.8983 9.43709 17.1218 9.9997 17.1218C10.5623 17.1218 11.1019 16.8983 11.4997 16.5005L17.9997 10.0005C18.7954 9.2048 19.2423 8.12567 19.2423 7.00045C19.2423 5.87523 18.7954 4.7961 17.9997 4.00045C17.2041 3.2048 16.1249 2.75781 14.9997 2.75781C13.8745 2.75781 12.7954 3.2048 11.9997 4.00045L5.4997 10.5005C4.30623 11.6939 3.63574 13.3126 3.63574 15.0005C3.63574 16.6883 4.30623 18.307 5.4997 19.5005C6.69318 20.6939 8.31188 21.3644 9.9997 21.3644C11.6875 21.3644 13.3062 20.6939 14.4997 19.5005L20.9997 13.0005'
														stroke='#7C8493'
														strokeWidth='2'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
												</svg>
											</div>
										</div>
										<Input placeholder='Enter job description' />
										<div className='flex justify-between text-dark-100'>
											<span>Maximum 500 characters</span>
											<span>0/500</span>
										</div>
									</div>
									<div className='space-y-3'>
										<div className='font-semibold text-primary'>Criteria B</div>
										<p className='font-medium text-title'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Velit vehicula libero pharetra lectus ut vulputate
											porttitor lorem. Tincidunt turpis.
										</p>
										<div className='text-sm text-dark-100'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Velit vehicula
										</div>
										<div className='flex items-center justify-between'>
											<RadioInputGroup
												options={["Met", "Not Met"]}
												onChange={(e) => {}}
												name='2'
											/>
											<div className='flex p-3 gap-3.5 rounded bg-white'>
												<svg
													className='cursor-pointer'
													width='24'
													height='24'
													viewBox='0 0 24 24'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														d='M10 14.0004C10.3259 14.333 10.7148 14.5972 11.1441 14.7776C11.5734 14.958 12.0344 15.0509 12.5 15.0509C12.9656 15.0509 13.4266 14.958 13.8559 14.7776C14.2852 14.5972 14.6741 14.333 15 14.0004L19 10.0004C19.663 9.33734 20.0355 8.43806 20.0355 7.50038C20.0355 6.5627 19.663 5.66342 19 5.00038C18.337 4.33734 17.4377 3.96484 16.5 3.96484C15.5623 3.96484 14.663 4.33734 14 5.00038L13.5 5.50038'
														stroke='#7C8493'
														strokeWidth='2'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
													<path
														d='M14.0004 9.99973C13.6745 9.66713 13.2855 9.4029 12.8563 9.22252C12.427 9.04213 11.966 8.94922 11.5004 8.94922C11.0347 8.94922 10.5738 9.04213 10.1445 9.22252C9.71523 9.4029 9.32626 9.66713 9.00038 9.99973L5.00038 13.9997C4.33734 14.6628 3.96484 15.562 3.96484 16.4997C3.96484 17.4374 4.33734 18.3367 5.00038 18.9997C5.66342 19.6628 6.5627 20.0353 7.50038 20.0353C8.43806 20.0353 9.33734 19.6628 10.0004 18.9997L10.5004 18.4997'
														stroke='#7C8493'
														strokeWidth='2'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
												</svg>
												<div className='h-[20px] w-[1px] bg-dark-100'></div>
												<svg
													className='cursor-pointer'
													width='24'
													height='24'
													viewBox='0 0 24 24'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														d='M14.9997 7.00045L8.4997 13.5005C8.10188 13.8983 7.87838 14.4378 7.87838 15.0005C7.87838 15.5631 8.10188 16.1026 8.4997 16.5005C8.89753 16.8983 9.43709 17.1218 9.9997 17.1218C10.5623 17.1218 11.1019 16.8983 11.4997 16.5005L17.9997 10.0005C18.7954 9.2048 19.2423 8.12567 19.2423 7.00045C19.2423 5.87523 18.7954 4.7961 17.9997 4.00045C17.2041 3.2048 16.1249 2.75781 14.9997 2.75781C13.8745 2.75781 12.7954 3.2048 11.9997 4.00045L5.4997 10.5005C4.30623 11.6939 3.63574 13.3126 3.63574 15.0005C3.63574 16.6883 4.30623 18.307 5.4997 19.5005C6.69318 20.6939 8.31188 21.3644 9.9997 21.3644C11.6875 21.3644 13.3062 20.6939 14.4997 19.5005L20.9997 13.0005'
														stroke='#7C8493'
														strokeWidth='2'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
												</svg>
											</div>
										</div>
										<Input placeholder='Enter job description' />
										<div className='flex justify-between text-dark-100'>
											<span>Maximum 500 characters</span>
											<span>0/500</span>
										</div>
									</div>
									<div className='space-y-3'>
										<div className='font-semibold text-primary'>Criteria B</div>
										<p className='font-medium text-title'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Velit vehicula libero pharetra lectus ut vulputate
											porttitor lorem. Tincidunt turpis.
										</p>
										<div className='text-sm text-dark-100'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Velit vehicula
										</div>
										<div className='flex items-center justify-between'>
											<RadioInputGroup
												options={["Met", "Not Met"]}
												onChange={(e) => {}}
												name='3'
											/>
											<div className='flex p-3 gap-3.5 rounded bg-white'>
												<svg
													className='cursor-pointer'
													width='24'
													height='24'
													viewBox='0 0 24 24'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														d='M10 14.0004C10.3259 14.333 10.7148 14.5972 11.1441 14.7776C11.5734 14.958 12.0344 15.0509 12.5 15.0509C12.9656 15.0509 13.4266 14.958 13.8559 14.7776C14.2852 14.5972 14.6741 14.333 15 14.0004L19 10.0004C19.663 9.33734 20.0355 8.43806 20.0355 7.50038C20.0355 6.5627 19.663 5.66342 19 5.00038C18.337 4.33734 17.4377 3.96484 16.5 3.96484C15.5623 3.96484 14.663 4.33734 14 5.00038L13.5 5.50038'
														stroke='#7C8493'
														strokeWidth='2'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
													<path
														d='M14.0004 9.99973C13.6745 9.66713 13.2855 9.4029 12.8563 9.22252C12.427 9.04213 11.966 8.94922 11.5004 8.94922C11.0347 8.94922 10.5738 9.04213 10.1445 9.22252C9.71523 9.4029 9.32626 9.66713 9.00038 9.99973L5.00038 13.9997C4.33734 14.6628 3.96484 15.562 3.96484 16.4997C3.96484 17.4374 4.33734 18.3367 5.00038 18.9997C5.66342 19.6628 6.5627 20.0353 7.50038 20.0353C8.43806 20.0353 9.33734 19.6628 10.0004 18.9997L10.5004 18.4997'
														stroke='#7C8493'
														strokeWidth='2'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
												</svg>
												<div className='h-[20px] w-[1px] bg-dark-100'></div>
												<svg
													className='cursor-pointer'
													width='24'
													height='24'
													viewBox='0 0 24 24'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														d='M14.9997 7.00045L8.4997 13.5005C8.10188 13.8983 7.87838 14.4378 7.87838 15.0005C7.87838 15.5631 8.10188 16.1026 8.4997 16.5005C8.89753 16.8983 9.43709 17.1218 9.9997 17.1218C10.5623 17.1218 11.1019 16.8983 11.4997 16.5005L17.9997 10.0005C18.7954 9.2048 19.2423 8.12567 19.2423 7.00045C19.2423 5.87523 18.7954 4.7961 17.9997 4.00045C17.2041 3.2048 16.1249 2.75781 14.9997 2.75781C13.8745 2.75781 12.7954 3.2048 11.9997 4.00045L5.4997 10.5005C4.30623 11.6939 3.63574 13.3126 3.63574 15.0005C3.63574 16.6883 4.30623 18.307 5.4997 19.5005C6.69318 20.6939 8.31188 21.3644 9.9997 21.3644C11.6875 21.3644 13.3062 20.6939 14.4997 19.5005L20.9997 13.0005'
														stroke='#7C8493'
														strokeWidth='2'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
												</svg>
											</div>
										</div>
										<Input placeholder='Enter job description' />
										<div className='flex justify-between text-dark-100'>
											<span>Maximum 500 characters</span>
											<span>0/500</span>
										</div>
									</div>
								</section>

								<section className='bg-[#F5FBFE] p-5 rounded-xl space-y-3'>
									<div className='font-semibold text-primary'>Criteria B</div>
									<p className='font-medium text-title'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Velit vehicula libero pharetra lectus ut vulputate porttitor
										lorem. Tincidunt turpis.
									</p>
									<div className='text-sm text-dark-100'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Velit vehicula
									</div>
									<div className='flex items-center justify-between'>
										<RadioInputGroup
											options={["Met", "Not Met"]}
											onChange={(e) => {}}
											name='1'
										/>
										<div className='flex p-3 gap-3.5 rounded bg-white'>
											<svg
												className='cursor-pointer'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M10 14.0004C10.3259 14.333 10.7148 14.5972 11.1441 14.7776C11.5734 14.958 12.0344 15.0509 12.5 15.0509C12.9656 15.0509 13.4266 14.958 13.8559 14.7776C14.2852 14.5972 14.6741 14.333 15 14.0004L19 10.0004C19.663 9.33734 20.0355 8.43806 20.0355 7.50038C20.0355 6.5627 19.663 5.66342 19 5.00038C18.337 4.33734 17.4377 3.96484 16.5 3.96484C15.5623 3.96484 14.663 4.33734 14 5.00038L13.5 5.50038'
													stroke='#7C8493'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													d='M14.0004 9.99973C13.6745 9.66713 13.2855 9.4029 12.8563 9.22252C12.427 9.04213 11.966 8.94922 11.5004 8.94922C11.0347 8.94922 10.5738 9.04213 10.1445 9.22252C9.71523 9.4029 9.32626 9.66713 9.00038 9.99973L5.00038 13.9997C4.33734 14.6628 3.96484 15.562 3.96484 16.4997C3.96484 17.4374 4.33734 18.3367 5.00038 18.9997C5.66342 19.6628 6.5627 20.0353 7.50038 20.0353C8.43806 20.0353 9.33734 19.6628 10.0004 18.9997L10.5004 18.4997'
													stroke='#7C8493'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
											<div className='h-[20px] w-[1px] bg-dark-100'></div>
											<svg
												className='cursor-pointer'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M14.9997 7.00045L8.4997 13.5005C8.10188 13.8983 7.87838 14.4378 7.87838 15.0005C7.87838 15.5631 8.10188 16.1026 8.4997 16.5005C8.89753 16.8983 9.43709 17.1218 9.9997 17.1218C10.5623 17.1218 11.1019 16.8983 11.4997 16.5005L17.9997 10.0005C18.7954 9.2048 19.2423 8.12567 19.2423 7.00045C19.2423 5.87523 18.7954 4.7961 17.9997 4.00045C17.2041 3.2048 16.1249 2.75781 14.9997 2.75781C13.8745 2.75781 12.7954 3.2048 11.9997 4.00045L5.4997 10.5005C4.30623 11.6939 3.63574 13.3126 3.63574 15.0005C3.63574 16.6883 4.30623 18.307 5.4997 19.5005C6.69318 20.6939 8.31188 21.3644 9.9997 21.3644C11.6875 21.3644 13.3062 20.6939 14.4997 19.5005L20.9997 13.0005'
													stroke='#7C8493'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</div>
									</div>
									<Input placeholder='Enter job description' />
									<div className='flex justify-between text-dark-100'>
										<span>Maximum 500 characters</span>
										<span>0/500</span>
									</div>
								</section>

								<section className='bg-[#F5FBFE] p-5 rounded-xl space-y-3'>
									<div className='font-semibold text-primary'>Criteria B</div>
									<p className='font-medium text-title'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Velit vehicula libero pharetra lectus ut vulputate porttitor
										lorem. Tincidunt turpis.
									</p>
									<div className='text-sm text-dark-100'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Velit vehicula
									</div>
									<div className='flex items-center justify-between'>
										<RadioInputGroup
											options={["Met", "Not Met"]}
											onChange={(e) => {}}
											name='1'
										/>
										<div className='flex p-3 gap-3.5 rounded bg-white'>
											<svg
												className='cursor-pointer'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M10 14.0004C10.3259 14.333 10.7148 14.5972 11.1441 14.7776C11.5734 14.958 12.0344 15.0509 12.5 15.0509C12.9656 15.0509 13.4266 14.958 13.8559 14.7776C14.2852 14.5972 14.6741 14.333 15 14.0004L19 10.0004C19.663 9.33734 20.0355 8.43806 20.0355 7.50038C20.0355 6.5627 19.663 5.66342 19 5.00038C18.337 4.33734 17.4377 3.96484 16.5 3.96484C15.5623 3.96484 14.663 4.33734 14 5.00038L13.5 5.50038'
													stroke='#7C8493'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													d='M14.0004 9.99973C13.6745 9.66713 13.2855 9.4029 12.8563 9.22252C12.427 9.04213 11.966 8.94922 11.5004 8.94922C11.0347 8.94922 10.5738 9.04213 10.1445 9.22252C9.71523 9.4029 9.32626 9.66713 9.00038 9.99973L5.00038 13.9997C4.33734 14.6628 3.96484 15.562 3.96484 16.4997C3.96484 17.4374 4.33734 18.3367 5.00038 18.9997C5.66342 19.6628 6.5627 20.0353 7.50038 20.0353C8.43806 20.0353 9.33734 19.6628 10.0004 18.9997L10.5004 18.4997'
													stroke='#7C8493'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
											<div className='h-[20px] w-[1px] bg-dark-100'></div>
											<svg
												className='cursor-pointer'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M14.9997 7.00045L8.4997 13.5005C8.10188 13.8983 7.87838 14.4378 7.87838 15.0005C7.87838 15.5631 8.10188 16.1026 8.4997 16.5005C8.89753 16.8983 9.43709 17.1218 9.9997 17.1218C10.5623 17.1218 11.1019 16.8983 11.4997 16.5005L17.9997 10.0005C18.7954 9.2048 19.2423 8.12567 19.2423 7.00045C19.2423 5.87523 18.7954 4.7961 17.9997 4.00045C17.2041 3.2048 16.1249 2.75781 14.9997 2.75781C13.8745 2.75781 12.7954 3.2048 11.9997 4.00045L5.4997 10.5005C4.30623 11.6939 3.63574 13.3126 3.63574 15.0005C3.63574 16.6883 4.30623 18.307 5.4997 19.5005C6.69318 20.6939 8.31188 21.3644 9.9997 21.3644C11.6875 21.3644 13.3062 20.6939 14.4997 19.5005L20.9997 13.0005'
													stroke='#7C8493'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</div>
									</div>
									<Input placeholder='Enter job description' />
									<div className='flex justify-between text-dark-100'>
										<span>Maximum 500 characters</span>
										<span>0/500</span>
									</div>
								</section>

								<section className='bg-[#F5FBFE] p-5 rounded-xl space-y-3'>
									<div className='font-semibold text-primary'>Criteria B</div>
									<p className='font-medium text-title'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Velit vehicula libero pharetra lectus ut vulputate porttitor
										lorem. Tincidunt turpis.
									</p>
									<div className='text-sm text-dark-100'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Velit vehicula
									</div>
									<div className='flex items-center justify-between'>
										<RadioInputGroup
											options={["Met", "Not Met"]}
											onChange={(e) => {}}
											name='1'
										/>
										<div className='flex p-3 gap-3.5 rounded bg-white'>
											<svg
												className='cursor-pointer'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M10 14.0004C10.3259 14.333 10.7148 14.5972 11.1441 14.7776C11.5734 14.958 12.0344 15.0509 12.5 15.0509C12.9656 15.0509 13.4266 14.958 13.8559 14.7776C14.2852 14.5972 14.6741 14.333 15 14.0004L19 10.0004C19.663 9.33734 20.0355 8.43806 20.0355 7.50038C20.0355 6.5627 19.663 5.66342 19 5.00038C18.337 4.33734 17.4377 3.96484 16.5 3.96484C15.5623 3.96484 14.663 4.33734 14 5.00038L13.5 5.50038'
													stroke='#7C8493'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													d='M14.0004 9.99973C13.6745 9.66713 13.2855 9.4029 12.8563 9.22252C12.427 9.04213 11.966 8.94922 11.5004 8.94922C11.0347 8.94922 10.5738 9.04213 10.1445 9.22252C9.71523 9.4029 9.32626 9.66713 9.00038 9.99973L5.00038 13.9997C4.33734 14.6628 3.96484 15.562 3.96484 16.4997C3.96484 17.4374 4.33734 18.3367 5.00038 18.9997C5.66342 19.6628 6.5627 20.0353 7.50038 20.0353C8.43806 20.0353 9.33734 19.6628 10.0004 18.9997L10.5004 18.4997'
													stroke='#7C8493'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
											<div className='h-[20px] w-[1px] bg-dark-100'></div>
											<svg
												className='cursor-pointer'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M14.9997 7.00045L8.4997 13.5005C8.10188 13.8983 7.87838 14.4378 7.87838 15.0005C7.87838 15.5631 8.10188 16.1026 8.4997 16.5005C8.89753 16.8983 9.43709 17.1218 9.9997 17.1218C10.5623 17.1218 11.1019 16.8983 11.4997 16.5005L17.9997 10.0005C18.7954 9.2048 19.2423 8.12567 19.2423 7.00045C19.2423 5.87523 18.7954 4.7961 17.9997 4.00045C17.2041 3.2048 16.1249 2.75781 14.9997 2.75781C13.8745 2.75781 12.7954 3.2048 11.9997 4.00045L5.4997 10.5005C4.30623 11.6939 3.63574 13.3126 3.63574 15.0005C3.63574 16.6883 4.30623 18.307 5.4997 19.5005C6.69318 20.6939 8.31188 21.3644 9.9997 21.3644C11.6875 21.3644 13.3062 20.6939 14.4997 19.5005L20.9997 13.0005'
													stroke='#7C8493'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</div>
									</div>
									<Input placeholder='Enter job description' />
									<div className='flex justify-between text-dark-100'>
										<span>Maximum 500 characters</span>
										<span>0/500</span>
									</div>
								</section>

								<section className='bg-[#F5FBFE] p-5 rounded-xl space-y-3'>
									<Input
										label='Upload Certifications e.g., ISO, NAFDAC, FDA, EC, TGA etc.,'
										type='file'
									/>
								</section>

								<section className='bg-[#F5FBFE] p-5 rounded-xl space-y-3'>
									<div className='font-semibold text-primary'>Criteria B</div>
									<p className='font-medium text-title'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Velit vehicula libero pharetra lectus ut vulputate porttitor
										lorem. Tincidunt turpis.
									</p>
									<div className='text-sm text-dark-100'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Velit vehicula
									</div>
									<div className='flex items-center justify-between'>
										<RadioInputGroup
											options={["Met", "Not Met"]}
											onChange={(e) => {}}
											name='1'
										/>
										<Button size='sm' theme='outline'>
											View more information
										</Button>
										<div className='flex p-3 gap-3.5 rounded bg-white'>
											<svg
												className='cursor-pointer'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M10 14.0004C10.3259 14.333 10.7148 14.5972 11.1441 14.7776C11.5734 14.958 12.0344 15.0509 12.5 15.0509C12.9656 15.0509 13.4266 14.958 13.8559 14.7776C14.2852 14.5972 14.6741 14.333 15 14.0004L19 10.0004C19.663 9.33734 20.0355 8.43806 20.0355 7.50038C20.0355 6.5627 19.663 5.66342 19 5.00038C18.337 4.33734 17.4377 3.96484 16.5 3.96484C15.5623 3.96484 14.663 4.33734 14 5.00038L13.5 5.50038'
													stroke='#7C8493'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													d='M14.0004 9.99973C13.6745 9.66713 13.2855 9.4029 12.8563 9.22252C12.427 9.04213 11.966 8.94922 11.5004 8.94922C11.0347 8.94922 10.5738 9.04213 10.1445 9.22252C9.71523 9.4029 9.32626 9.66713 9.00038 9.99973L5.00038 13.9997C4.33734 14.6628 3.96484 15.562 3.96484 16.4997C3.96484 17.4374 4.33734 18.3367 5.00038 18.9997C5.66342 19.6628 6.5627 20.0353 7.50038 20.0353C8.43806 20.0353 9.33734 19.6628 10.0004 18.9997L10.5004 18.4997'
													stroke='#7C8493'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
											<div className='h-[20px] w-[1px] bg-dark-100'></div>
											<svg
												className='cursor-pointer'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M14.9997 7.00045L8.4997 13.5005C8.10188 13.8983 7.87838 14.4378 7.87838 15.0005C7.87838 15.5631 8.10188 16.1026 8.4997 16.5005C8.89753 16.8983 9.43709 17.1218 9.9997 17.1218C10.5623 17.1218 11.1019 16.8983 11.4997 16.5005L17.9997 10.0005C18.7954 9.2048 19.2423 8.12567 19.2423 7.00045C19.2423 5.87523 18.7954 4.7961 17.9997 4.00045C17.2041 3.2048 16.1249 2.75781 14.9997 2.75781C13.8745 2.75781 12.7954 3.2048 11.9997 4.00045L5.4997 10.5005C4.30623 11.6939 3.63574 13.3126 3.63574 15.0005C3.63574 16.6883 4.30623 18.307 5.4997 19.5005C6.69318 20.6939 8.31188 21.3644 9.9997 21.3644C11.6875 21.3644 13.3062 20.6939 14.4997 19.5005L20.9997 13.0005'
													stroke='#7C8493'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</div>
									</div>
									<Input placeholder='Enter job description' />
									<div className='flex justify-between text-dark-100'>
										<span>Maximum 500 characters</span>
										<span>0/500</span>
									</div>
								</section>

								<div className='flex justify-end'>
									<Button>Order for RFP</Button>
								</div>
							</WhiteWrapper>
						</section>
					</div>
				</CollaborationWrapper>
			</FormProvider>
		</DefaultLayout>
	);
};

export default index;
export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
