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
};

const LargeDetailsCard = ({ type }: LargeDetailsCardProps) => {
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
				<Image
					className='w-full'
					src='/assets/images/cover-image.jpg'
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
						{type === "profile" && (
							<Link href={`/profile/${router.query.username}/edit`}>
								<Button theme='outline'>Edit Profile</Button>
							</Link>
						)}
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
