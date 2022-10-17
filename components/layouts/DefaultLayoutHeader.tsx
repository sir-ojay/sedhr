import React, { useEffect, useState } from "react";
import Input from "@/components/global/Input";
import Avatar from "../global/Avatar";
import { FormProvider, useForm } from "react-hook-form";
import { Twirl as Hamburger } from "hamburger-react";
import { LoginResponse } from "@/types/auth/auth";
import Cookies from "js-cookie";
import Link from "next/link";

const DefaultLayoutHeader = ({ isOpen, setOpen }: any) => {
	const [user, setUser] = useState<LoginResponse>();

	useEffect(() => {
		try {
			const user = JSON.parse(Cookies.get("sedherUser") || "{}");
			setUser(user);
			console.log(user);
		} catch (error) {
			console.log(error);
		}
	}, []);

	const methods = useForm({
		defaultValues: {
			search: "",
		},
	});
	return (
		<header className='xl:pb-8 py-4 bg-white px-6 xl:py-8 xl:pr-9 fixed top-0 right-0 w-full xl:w-[calc(100%-272px)] z-10'>
			<div className='hidden xl:flex items-center justify-between'>
				<div className='hidden xl:block max-w-[570px] w-full'>
					<FormProvider {...methods}>
						<Input type='search' placeholder='Search...' name='search' />
					</FormProvider>
				</div>
				<div className='hidden xl:flex justify-between items-center gap-9 bg-tertiary p-[10px] rounded-xl cursor-pointer'>
					{/* <button type='button'>
						<img
							src='/assets/icons/layouts/more.svg'
							alt='see more'
							title='see more'
						/>
					</button> */}
					<div className='flex items-center justify-between gap-3'>
						<div className='text-right font-epilogue'>
							<div className='font-semibold text-lg capitalize text-dark-900'>
								{user?.name.toLowerCase()}
							</div>
							<div className='text-sm text-left uppercase text-dark-100'>
								{user?.accountType.toLowerCase() || ""}
							</div>
						</div>
						<Avatar
							href={`/profile/${user?.username}`}
							name={"Salami Tayo"}
							size={48}
							image='/assets/icons/layouts/profile.png'
						/>
					</div>
				</div>
			</div>
			<div className='xl:hidden flex items-center justify-between'>
				<div className='flex items-center gap-3'>
					<Hamburger
						color='#0b211a'
						size={28}
						label='Show menu'
						toggled={isOpen}
						toggle={setOpen}
					/>
					<button>
						<svg
							width='24'
							height='25'
							viewBox='0 0 24 25'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<circle
								cx='11.7659'
								cy='12.2664'
								r='8.98856'
								stroke='#515B6F'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M18.0176 18.9849L21.5416 22.4997'
								stroke='#515B6F'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>
				</div>
				<div className='flex items-center gap-3'>
					<Link href='/marketplace'>
						<svg
							width='25'
							height='25'
							viewBox='0 0 25 25'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<g clipPath='url(#clip0_3982_46696)'>
								<path
									d='M16.5207 13.5C17.2707 13.5 17.9307 13.09 18.2707 12.47L21.8507 5.98C22.2207 5.32 21.7407 4.5 20.9807 4.5H6.1807L5.2407 2.5H1.9707V4.5H3.9707L7.5707 12.09L6.2207 14.53C5.4907 15.87 6.4507 17.5 7.9707 17.5H19.9707V15.5H7.9707L9.0707 13.5H16.5207ZM7.1307 6.5H19.2807L16.5207 11.5H9.5007L7.1307 6.5ZM7.9707 18.5C6.8707 18.5 5.9807 19.4 5.9807 20.5C5.9807 21.6 6.8707 22.5 7.9707 22.5C9.0707 22.5 9.9707 21.6 9.9707 20.5C9.9707 19.4 9.0707 18.5 7.9707 18.5ZM17.9707 18.5C16.8707 18.5 15.9807 19.4 15.9807 20.5C15.9807 21.6 16.8707 22.5 17.9707 22.5C19.0707 22.5 19.9707 21.6 19.9707 20.5C19.9707 19.4 19.0707 18.5 17.9707 18.5Z'
									fill='#515B6F'
								/>
							</g>
							<defs>
								<clipPath id='clip0_3982_46696'>
									<rect
										width='24'
										height='24'
										fill='white'
										transform='translate(0.970703 0.5)'
									/>
								</clipPath>
							</defs>
						</svg>
					</Link>
					<Link href='/notifications'>
						<svg
							width='25'
							height='25'
							viewBox='0 0 25 25'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M11.4531 20.6377C11.9711 21.2147 12.6361 21.5317 13.3261 21.5317H13.3271C14.0201 21.5317 14.6881 21.2147 15.2071 20.6367C15.4851 20.3297 15.9591 20.3047 16.2661 20.5817C16.5741 20.8587 16.5991 21.3337 16.3221 21.6407C15.5141 22.5377 14.4511 23.0317 13.3271 23.0317H13.3251C12.2041 23.0307 11.1431 22.5367 10.3381 21.6397C10.0611 21.3327 10.0861 20.8577 10.3941 20.5817C10.7021 20.3037 11.1761 20.3287 11.4531 20.6377ZM13.3759 1.53174C17.8209 1.53174 20.8069 4.99374 20.8069 8.22674C20.8069 9.88974 21.2299 10.5947 21.6789 11.3427C22.1229 12.0807 22.6259 12.9187 22.6259 14.5027C22.2769 18.5497 18.0519 18.8797 13.3759 18.8797C8.69993 18.8797 4.47393 18.5497 4.12892 14.5667C4.12593 12.9187 4.62893 12.0807 5.07293 11.3427L5.22968 11.0789C5.61561 10.4156 5.94493 9.69409 5.94493 8.22674C5.94493 4.99374 8.93093 1.53174 13.3759 1.53174ZM13.3759 3.03174C9.88093 3.03174 7.44493 5.76974 7.44493 8.22674C7.44493 10.3057 6.86793 11.2667 6.35793 12.1147C5.94893 12.7957 5.62593 13.3337 5.62593 14.5027C5.79293 16.3887 7.03793 17.3797 13.3759 17.3797C19.6789 17.3797 20.9629 16.3447 21.1289 14.4377C21.1259 13.3337 20.8029 12.7957 20.3939 12.1147C19.8839 11.2667 19.3069 10.3057 19.3069 8.22674C19.3069 5.76974 16.8709 3.03174 13.3759 3.03174Z'
								fill='#515B6F'
							/>
						</svg>
					</Link>
					<Link href='/messages'>
						<svg
							width='25'
							height='25'
							viewBox='0 0 25 25'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<g clipPath='url(#clip0_3982_46703)'>
								<path
									d='M12.9711 21.5L9.37109 17.9H6.97109C6.01631 17.9 5.10064 17.5207 4.42551 16.8456C3.75038 16.1705 3.37109 15.2548 3.37109 14.3V7.1C3.37109 6.14522 3.75038 5.22955 4.42551 4.55442C5.10064 3.87928 6.01631 3.5 6.97109 3.5H18.9711C19.9259 3.5 20.8415 3.87928 21.5167 4.55442C22.1918 5.22955 22.5711 6.14522 22.5711 7.1V14.3C22.5711 15.2548 22.1918 16.1705 21.5167 16.8456C20.8415 17.5207 19.9259 17.9 18.9711 17.9H16.5711L12.9711 21.5Z'
									stroke='#515B6F'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M8.16992 8.2998H17.7699'
									stroke='#515B6F'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M8.16992 13.1001H15.3699'
									stroke='#515B6F'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</g>
							<defs>
								<clipPath id='clip0_3982_46703'>
									<rect
										width='24'
										height='24'
										fill='white'
										transform='translate(0.970703 0.5)'
									/>
								</clipPath>
							</defs>
						</svg>
					</Link>
					<Avatar
						href='/profile/me'
						name={"Salami Tayo"}
						size={32}
						image='/assets/icons/layouts/profile.png'
					/>
				</div>
			</div>
		</header>
	);
};

export default DefaultLayoutHeader;
