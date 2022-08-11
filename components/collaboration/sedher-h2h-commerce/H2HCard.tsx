import Avatar from "@/components/global/Avatar";
import Button from "@/components/global/Button";
import StatusPill from "@/components/global/StatusPill";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type H2HCardProps = {
	type: string;
	star?: boolean;
};

const H2HCard = ({ type, star }: H2HCardProps) => {
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
						<div>
							<Link href='/connection/1'>
								<a className='font-semibold text-[#2A2069] hover:underline'>
									Thomas clinics
								</a>
							</Link>
							<div className='text-sm text-dark-400 font-normal font-epilogue text-[#4C4475]'>
								Dental clinics
							</div>
							<div className='text-sm text-accents-brown'>
								Patient care centres
							</div>
						</div>
					</div>
					<div className='rounded-xl overflow-hidden'>
						<Image
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
						<Button
							href='/connection/user-profile/2'
							className='w-full'
							theme='outline'>
							View H2H
						</Button>
					</div>
				</div>
			</WhiteWrapper>
		</motion.article>
	);
};

export default H2HCard;
