import { LoginResponse } from "@/types/auth/auth";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import Button from "./Button";
import SmallAvatars from "./SmallAvatars";

type LargeDetailsCardProps = {
	type: "event" | "group" | "account" | "profile";
	editCoverPicture?: () => void;
	editable?: boolean;
	data: any;
};

const LargeDetailsCard = ({
	type,
	editable,
	editCoverPicture,
	data,
}: LargeDetailsCardProps) => {
	const router = useRouter();
	const [user, setUser] = useState<LoginResponse>();

	useEffect(() => {
		try {
			const user = JSON.parse(Cookies.get("sedherUser") || "{}");
			setUser(user);
		} catch (error) {
			console.log(error);
		}
	}, []);
	return (
		<section className='rounded-xl bg-white overflow-hidden'>
			<div className='relative'>
				{editable && (
					<button
						onClick={editCoverPicture}
						className='absolute z-30 right-5 top-5'>
						<svg
							width='40'
							height='40'
							viewBox='0 0 40 40'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<g clip-path='url(#clip0_4215_44230)'>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M11.8787 14.8787C12.4413 14.3161 13.2044 14 14 14H17C17.5523 14 18 14.4477 18 15C18 15.5523 17.5523 16 17 16H14C13.7348 16 13.4804 16.1054 13.2929 16.2929C13.1054 16.4804 13 16.7348 13 17V26C13 26.2652 13.1054 26.5196 13.2929 26.7071C13.4804 26.8946 13.7348 27 14 27H23C23.2652 27 23.5196 26.8946 23.7071 26.7071C23.8946 26.5196 24 26.2652 24 26V23C24 22.4477 24.4477 22 25 22C25.5523 22 26 22.4477 26 23V26C26 26.7957 25.6839 27.5587 25.1213 28.1213C24.5587 28.6839 23.7957 29 23 29H14C13.2043 29 12.4413 28.6839 11.8787 28.1213C11.3161 27.5587 11 26.7956 11 26V17C11 16.2044 11.3161 15.4413 11.8787 14.8787Z'
									fill='#F8F8FD'
								/>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M24.7929 10.7931C25.3783 10.2078 26.1722 9.87891 27 9.87891C27.8278 9.87891 28.6217 10.2078 29.2071 10.7931C29.7925 11.3785 30.1213 12.1724 30.1213 13.0002C30.1213 13.8281 29.7925 14.622 29.2071 15.2073L20.7071 23.7073C20.5196 23.8949 20.2652 24.0002 20 24.0002H17C16.4477 24.0002 16 23.5525 16 23.0002V20.0002C16 19.735 16.1054 19.4807 16.2929 19.2931L24.7929 10.7931ZM27 11.8789C26.7026 11.8789 26.4174 11.997 26.2071 12.2073L18 20.4144V22.0002H19.5858L27.7929 13.7931C28.0032 13.5828 28.1213 13.2976 28.1213 13.0002C28.1213 12.7028 28.0032 12.4176 27.7929 12.2073C27.5826 11.997 27.2974 11.8789 27 11.8789Z'
									fill='#F8F8FD'
								/>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M23.2929 12.2929C23.6834 11.9024 24.3166 11.9024 24.7071 12.2929L27.7071 15.2929C28.0976 15.6834 28.0976 16.3166 27.7071 16.7071C27.3166 17.0976 26.6834 17.0976 26.2929 16.7071L23.2929 13.7071C22.9024 13.3166 22.9024 12.6834 23.2929 12.2929Z'
									fill='#F8F8FD'
								/>
							</g>
							<path
								d='M0.5 10C0.5 4.7533 4.7533 0.5 10 0.5H30C35.2467 0.5 39.5 4.7533 39.5 10V39.5H0.5V10Z'
								stroke='#A8ADB7'
							/>
							<defs>
								<clipPath id='clip0_4215_44230'>
									<rect
										width='24'
										height='24'
										fill='white'
										transform='translate(8 8)'
									/>
								</clipPath>
							</defs>
						</svg>
					</button>
				)}
				<Image
					className='w-full bg-cover object-cover  '
					src={data && data.coverPicture}
					width={2286}
					height={420}
				/>

				{(type === "account" || type === "profile") && (
					<div className='absolute top-[50%] left-8 border-8 border-white rounded-full'>
						<Avatar
							as='div'
							size={140}
							name='Salami  Wale Tayo'
							image='/assets/images/avatar.png'
						/>
					</div>
				)}
			</div>
			{(type === "event" || type === "group") && (
				<div className='p-5 space-y-2'>
					<div className='flex justify-between items-center'>
						<h1 className='font-semibold font-clash text-2xl text-dark-900'>
							Adagio CME-CPD Training Service
						</h1>
						<Button theme='outline'>Share</Button>
					</div>
					<div className='font-epilogue text-lg text-dark-900'>
						Event by:{" "}
						<Button
							tag='a'
							underline={false}
							href='/'
							className='text-[#1E5156]'>
							Salami tayo
						</Button>
					</div>
					<div className='flex gap-2 items-center py-3 px-6 bg-[#44BE9D1A] w-fit rounded-md'>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M5 5V21'
								stroke='#44BE9D'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M19 5V14'
								stroke='#44BE9D'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M5 4.9996C5.93464 4.08346 7.19124 3.57031 8.5 3.57031C9.80876 3.57031 11.0654 4.08346 12 4.9996C12.9346 5.91573 14.1912 6.42888 15.5 6.42888C16.8088 6.42888 18.0654 5.91573 19 4.9996'
								stroke='#44BE9D'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M5 13.9996C5.93464 13.0835 7.19124 12.5703 8.5 12.5703C9.80876 12.5703 11.0654 13.0835 12 13.9996C12.9346 14.9157 14.1912 15.4289 15.5 15.4289C16.8088 15.4289 18.0654 14.9157 19 13.9996'
								stroke='#44BE9D'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						<span className='text-[#44BE9D] font-semibold'>OPEN</span>
					</div>
					<SmallAvatars name='Richard Ingwe' label='+300 Attendees' />
				</div>
			)}
			{(type === "account" || type === "profile") && (
				<div className='p-5 space-y-2 ml-56'>
					<div className='flex justify-between items-center'>
						<div className='space-y-2'>
							<h1 className='font-semibold font-clash text-2xl text-title'>
								{user?.name}
							</h1>
							{/* <div className='text-lg font-epilogue text-dark-100'>
								Medical Doctor at{" "}
								<Button
									underline={false}
									href='/'
									className='text-title'
									tag='a'>
									Eko hospital
								</Button>
							</div> */}
						</div>
						{type === "account" && <Button theme='outline'>Unfollow</Button>}
						{/* {type === "profile" && (
							<Link href={`/profile/${router.query.username}/edit`}>
								<Button theme='outline'>Edit Profile</Button>
							</Link>
						)} */}
					</div>
					<Button
						tag='a'
						href='/'
						className='text-[#F47D5B] uppercase'
						underline={false}>
						{user?.accountType}
					</Button>
					{type === "account" && (
						<div className='flex gap-2'>
							<Button>Message</Button>
							<Button theme='outline' icon='more' />
							<Button theme='outline' icon='notification' />
						</div>
					)}
				</div>
			)}
		</section>
	);
};

export default LargeDetailsCard;
