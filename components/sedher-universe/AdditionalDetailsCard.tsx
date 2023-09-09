import Button from "../global/Button";
import WhiteWrapper from "../global/WhiteWrapper";
import moment from "moment";

type AdditionalDetailsCardProps = {
	type: "group" | "event" | "account" | "experience" | "profile";
	email?: string;
	username?: string;
	business?:string;
	createdAt?:string
};

const AdditionalDetailsCard = ({
	business,
	type,
	email,
	createdAt,
	username,
}: AdditionalDetailsCardProps) => {
	return (
		<div className='col-span-3 '>
			<div className='sticky top-[164px] space-y-5'>
				<WhiteWrapper>
					<h5 className='font-clash font-semibold text-2xl text-dark-900'>
						Additional Details
					</h5>
					{type === "profile" && (
						<div className='mt-4 space-y-4'>
							<div className='flex gap-4 w-full overflow-hidden'>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									className='w-6 h-6'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M16 7C16 8.06087 15.5786 9.07828 14.8284 9.82843C14.0783 10.5786 13.0609 11 12 11C10.9391 11 9.92172 10.5786 9.17157 9.82843C8.42143 9.07828 8 8.06087 8 7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V7ZM12 14C10.1435 14 8.36301 14.7375 7.05025 16.0503C5.7375 17.363 5 19.1435 5 21H19C19 19.1435 18.2625 17.363 16.9497 16.0503C15.637 14.7375 13.8565 14 12 14V14Z'
										stroke='#25324B'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>

								<div className='font-epilogue w-[calc(100%-40px)]'>
									<div className='text-[#4C4475]'>{business === 'business'? "Business link":"Profile link"}</div>
									<div className='text-[#3772FF] w-full cursor-pointer text-sm break-words'> <a href={business === 'business' ?  `https://sedhr.vercel.app/pages/business/${username}`  :  `https://sedhr.vercel.app/profile/${username}`}>{business ==='business'?  `https://sedhr.vercel.app/pages/business/${username}`  :  `https://sedhr.vercel.app/profile/${username}`}
							</a>  
											</div>
								</div>
							</div>
							<div className='flex gap-4'>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z'
										stroke='#616A6A'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M3 7L12 13L21 7'
										stroke='#616A6A'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
								<div className='font-epilogue'>
									<div className='text-[#4C4475'>{business==='business'? "Business Email":"Email"}</div>
									<div className='text-[#2A2069]'>{email}</div>
								</div>
							</div>
							<div className='flex gap-4'>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<g clip-path='url(#clip0_4215_32166)'>
										<path
											d='M16 4H8C7.44772 4 7 4.44772 7 5V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V5C17 4.44772 16.5523 4 16 4Z'
											stroke='#4C4475'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M11 5H13'
											stroke='#4C4475'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M12 17V17.01'
											stroke='#2A2069'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</g>
									<defs>
										<clipPath id='clip0_4215_32166'>
											<rect width='24' height='24' fill='white' />
										</clipPath>
									</defs>
								</svg>

								<div className='font-epilogue'>
									<div className='text-[#4C4475]'>Connected</div>
									<div className='text-[#2A2069]'>{moment(createdAt).format("YYYY, MMMM, DD")} </div>
								</div>
							</div>
							<div className='flex gap-4'>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<g clip-path='url(#clip0_4215_32175)'>
										<path
											d='M5 7H12M10 5V7C10 9.12173 9.47322 11.1566 8.53553 12.6569C7.59785 14.1571 6.32608 15 5 15M6 11C5.99834 12.0318 6.69452 13.0241 7.94307 13.7695C9.19163 14.5149 10.896 14.9558 12.7 15'
											stroke='#4C4475'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M11 19L15 10L19 19M18.1 17H11.9'
											stroke='#4C4475'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</g>
									<defs>
										<clipPath id='clip0_4215_32175'>
											<rect width='24' height='24' fill='white' />
										</clipPath>
									</defs>
								</svg>

								<div className='font-epilogue'>
									<div className='text-[#4C4475'>Languages</div>
									<div className='text-[#2A2069]'>English</div>
								</div>
							</div>
						</div>
					)}
					<div className='mt-4 space-y-4'>
						{type !== "profile" && (
							<>
								<div className='flex gap-4'>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z'
											stroke='#616A6A'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M3 7L12 13L21 7'
											stroke='#616A6A'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
									<div className='font-epilogue'>
										<div className='text-dark-100'>Calender</div>
										<div className='text-dark-900'>
											Fri, May 27, 2022, 11:30 AM
										</div>
									</div>
								</div>
								<div className='flex gap-4'>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M5 7H12M10 5V7C10 9.12173 9.47322 11.1566 8.53553 12.6569C7.59785 14.1571 6.32608 15 5 15M6 11C5.99834 12.0318 6.69452 13.0241 7.94307 13.7695C9.19163 14.5149 10.896 14.9558 12.7 15'
											stroke='#616A6A'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M11 19L15 10L19 19M18.1 17H11.9'
											stroke='#616A6A'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
									<div className='font-epilogue'>
										<div className='text-dark-100'>Languages</div>
										<div className='text-dark-900'>English</div>
									</div>
								</div>
							</>
						)}

						{type === "event" && (
							<div className='flex gap-4'>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4Z'
										stroke='#7C8493'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
										stroke='#7C8493'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M16.5 7.5V7.501'
										stroke='#7C8493'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
								<div className='font-epilogue'>
									<div className='text-dark-100'>Event Link</div>
									<Button href='/' tag='a' className='text-dark-900'>
										eventlink.com/jrgry6788ll2
									</Button>
								</div>
							</div>
						)}

						{type === "group" && (
							<Button size='sm' className='w-full'>
								Invite Connection
							</Button>
						)}
					</div>
				</WhiteWrapper>

				{type === "group" && (
					<Button size='sm' theme='outline' className='w-full'>
						Leave Group
					</Button>
				)}

				{type === "event" && (
					<Button size='sm' theme='outline' className='w-full'>
						Leave Event
					</Button>
				)}
			</div>
		</div>
	);
};

export default AdditionalDetailsCard;
