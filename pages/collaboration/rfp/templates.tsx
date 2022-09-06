import CollaborationWrapper from "@/components/collaboration/CollaborationWrapper";
import RFPCard from "@/components/collaboration/rfp/RFPCard";
import Avatar from "@/components/global/Avatar";
import Button from "@/components/global/Button";
import GoBackButton from "@/components/global/GoBackButton";
import Input from "@/components/global/Input";
import RadioInputGroup from "@/components/global/RadioInputGroup";
import StatusPill from "@/components/global/StatusPill";
import Switch from "@/components/global/Switch";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useRouter } from "next/router";

const RFPTemplates = () => {
	const router = useRouter();
	return (
		<DefaultLayout title='Sedher | Collaboration | RFP Templates'>
			<div className='grid grid-cols-6 gap-8'>
				<section className='col-span-4'>
					<div className='flex items-center mb-8'>
						<GoBackButton />
						<div>
							<div className='font-epilogue capitalize font-semibold text-[20px] text-dark-900'>
								Create Request for Proposal
							</div>
							<div className='text-dark-900'>
								collaborate with your follow connection
							</div>
						</div>
					</div>
					<WhiteWrapper title='RPF Template'>
						<span className='text-sm text-dark-100'>
							Ensectetur adipiscing elit. Odio ullamcorper sed urna
						</span>
					</WhiteWrapper>
					<section className='my-10 space-y-4'>
						<WhiteWrapper title='Sedher RFP 1'>
							<div className='flex gap-9'>
								<div className='text-sm text-dark-100 w-[calc(100%-24px)]'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
									ullamcorper sed urna sodales blandit consectetur frin gilla
									Turpis vulputate in nibh mi tempor, nec elit. Tincidunt purus
									eros, massa ultricies bibendum condimentum. Lorem at amet
									dolor gravida.
								</div>
								<svg
									className='w-6 h-6 ml- cursor-pointer'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M19.75 11.7246L4.75 11.7246'
										stroke='#616A6A'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M13.7002 5.701L19.7502 11.725L13.7002 17.75'
										stroke='#616A6A'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</div>
						</WhiteWrapper>
						<WhiteWrapper title='Sedher RFP 2'>
							<div className='flex gap-9'>
								<div className='text-sm text-dark-100 w-[calc(100%-24px)]'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
									ullamcorper sed urna sodales blandit consectetur frin gilla
									Turpis vulputate in nibh mi tempor, nec elit. Tincidunt purus
									eros, massa ultricies bibendum condimentum. Lorem at amet
									dolor gravida.
								</div>
								<svg
									className='w-6 h-6 ml- cursor-pointer'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M19.75 11.7246L4.75 11.7246'
										stroke='#616A6A'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M13.7002 5.701L19.7502 11.725L13.7002 17.75'
										stroke='#616A6A'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</div>
						</WhiteWrapper>
					</section>
					<WhiteWrapper title='Custom Template' className='mb-10'>
						<div className='flex gap-9 items-center'>
							<div className='text-sm text-dark-100 w-[calc(100%-24px)]'>
								Ensectetur adipiscing elit. Odio ullamcorper sed urna
							</div>
							<Button
								className='w-[400px]'
								onClick={() => router.push("/collaboration/rfp/create?step=1")}
								theme='outline'>
								Create Custom Template
							</Button>
						</div>
					</WhiteWrapper>
					<WhiteWrapper title='sedher custom'>
						<div className='flex gap-9'>
							<div className='text-sm text-dark-100 w-[calc(100%-24px)]'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
								ullamcorper sed urna sodales blandit consectetur frin gilla
								Turpis vulputate in nibh mi tempor, nec elit. Tincidunt purus
								eros, massa ultricies bibendum condimentum. Lorem at amet dolor
								gravida.
							</div>
							<svg
								className='w-6 h-6 ml- cursor-pointer'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M19.75 11.7246L4.75 11.7246'
									stroke='#616A6A'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M13.7002 5.701L19.7502 11.725L13.7002 17.75'
									stroke='#616A6A'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
					</WhiteWrapper>
				</section>
				<section className='col-span-2 space-y-6'>
					<article className='bg-primary p-4 rounded-xl space-y-6'>
						<div className='flex justify-end'>
							<svg
								className='cursor-pointer'
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
						<div className='flex items-center justify-between'>
							<h3 className='text-white font-semibold'>
								Learning how Request for proposal(RFP) Works
							</h3>
						</div>

						<p className='w-full max-w-[400px] text-sm text-white'>
							tristique tellus iaculis at. Sem erat a ultrices duis nibh.
							Commodo vestibulum vulputate malesuada mauris amet faucibus vitae.
							Fusce ut sed fermentum vitae, massa. Semper{" "}
						</p>
						<div className='flex justify-end items-end gap-20'>
							<Button
								theme='plain'
								icon='video'
								size='sm'
								className='w-[210px] h-fit py-3 bg-white rounded-[5px] text-primary'>
								Watch Tutorial
							</Button>
						</div>
					</article>
				</section>
			</div>
		</DefaultLayout>
	);
};

export default RFPTemplates;
