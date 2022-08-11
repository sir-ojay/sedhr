import Avatar from "@/components/global/Avatar";
import Button from "@/components/global/Button";
import StatusPill from "@/components/global/StatusPill";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type CollaboCardProps = {
	type: string;
	star?: boolean;
};

const CollaboCard = ({ type, star }: CollaboCardProps) => {
	return (
		<motion.article layout>
			<section className='rounded-xl bg-white overflow-hidden'>
				<Image
					className='w-full'
					src='/assets/images/collabo.jpg'
					width={341}
					height={192}
					layout='responsive'
				/>
				<div className='space-y-3 p-5'>
					<div className='flex items-center gap-2'>
						<StatusPill text='Machines' bg='#1AD48D1A' textColor='#1AD48D' />
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
							icon='collabo-arrow'
							theme='outline'>
							View Requirement
						</Button>
					</div>
				</div>
			</section>
		</motion.article>
	);
};

export default CollaboCard;
