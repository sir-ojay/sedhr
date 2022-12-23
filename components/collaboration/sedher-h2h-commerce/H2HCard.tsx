import Avatar from "@/components/global/Avatar";
import Button from "@/components/global/Button";
import StatusPill from "@/components/global/StatusPill";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type H2HCardProps = {
	type?: string;
};

const H2HCard = ({ type }: H2HCardProps) => {
	const router = useRouter();

	return (
		<motion.article layout>
			<WhiteWrapper>
				<div className='space-y-3'>
					<div className='flex gap-3 mb-3'>
						<Avatar
							href='/connection/1'
							shape='square'
							size={54}
							name='Thomas clinics'
						/>
						<div className='w-full flex justify-between '>
							<div>
								<Link
									href='/connection/1'
									className='font-semibold text-[#2A2069] hover:underline'>
									Thomas clinics
								</Link>
								<div className='text-sm text-dark-400 font-normal font-epilogue text-[#4C4475]'>
									Dental clinics
								</div>
								<div className='text-sm text-accents-brown'>
									Patient care centres
								</div>
							</div>

							<div>
								{type === "cancel" && (
									<StatusPill
										text='cancel'
										bg='white'
										textColor='#FF3956'
										statusStyle='border border-[#FF3956] font-semibold font-archivo flex justify-between items-center '
									/>
								)}

								{type === "saved" && (
									<StatusPill
										text='saved'
										bg='white'
										textColor=' #1699F8'
										statusStyle='border border-[#1699F8] font-semibold font-archivo flex justify-between items-center '
									/>
								)}
								{type === "complete" && (
									<StatusPill
										text='complete'
										bg='white'
										textColor='#1AD48D'
										statusStyle='border border-[#1AD48D] font-semibold font-archivo flex justify-between items-center '
									/>
								)}
							</div>
						</div>
					</div>
					<div className='rounded-xl overflow-hidden'>
						<Image
							alt=''
							className='w-full'
							src='/assets/images/collabo.jpg'
							width={341}
							height={192}
							layout='responsive'
						/>
					</div>
					<div className='flex items-center gap-2'>
						<StatusPill text='Product' bg='#1AD48D1A' textColor='#1AD48D' />
						<span className='text-sm text-[#4C4475]'>
							Created Friday 13 June
						</span>
					</div>
					<h4 className='font-semibold text-sm text-[#2A2069] hover:underline'>
						Quis amet rutrum sem.
					</h4>
					<div className='text-sm text-[#4C4475]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tempor
						semper amet, morbi. Egestas massa ac aliquam quam velit.
					</div>
					<div className='flex items-center gap-5'>
						{type !== "cancel" && type !== "complete" && type !== "saved" && (
							<Button
								href='/connection/user-profile/2'
								className='w-full'
								theme='outline'
								onClick={() =>
									router.push(
										"/collaboration/sedher-h2h-commerce/thomas-clinics"
									)
								}>
								View H2H
							</Button>
						)}
					</div>
				</div>
			</WhiteWrapper>
		</motion.article>
	);
};

export default H2HCard;
