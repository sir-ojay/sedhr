import Avatar from "@/components/global/Avatar";
import Button from "@/components/global/Button";
import StatusPill from "@/components/global/StatusPill";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import { motion } from "framer-motion";
import Link from "next/link";

const LuminariesCard = () => {
	return (
		<motion.article layout>
			<WhiteWrapper>
				<div className='space-y-3'>
					<div className='flex gap-3'>
						<Avatar
							href='/connection/1'
							shape='square'
							size={54}
							name='Tayo Adebambo'
						/>
						<div>
							<Link
								href='/connection/1'
								className='font-semibold text-[#2A2069] hover:underline'>
								Tayo Adebambo
							</Link>
							<div className='text-sm text-dark-400 font-normal font-epilogue text-[#4C4475]'>
								Speciality: Dermatology
							</div>
							<div className='text-sm text-accents-brown'>
								Sedher Luminaries
							</div>
						</div>
					</div>
					<hr />
					<div className='flex items-center gap-2'>
						<StatusPill text='Product' bg='#1AD48D1A' textColor='#1AD48D' />
						<span className='text-sm text-[#4C4475]'>Friday 13 June</span>
					</div>
					<h4 className='font-semibold text-sm text-[#2A2069] hover:underline'>
						Quis amet rutrum sem.
					</h4>
					<div className='text-sm text-[#4C4475]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tempor
						semper amet, morbi. Egestas massa ac aliquam quam velit.
					</div>
					<div className='space-y-5'>
						<Button href='/connection/user-profile/2' className='w-full'>
							Book
						</Button>
						<Button
							href='/connection/user-profile/2'
							className='w-full'
							theme='outline'>
							Profile
						</Button>
					</div>
				</div>
			</WhiteWrapper>
		</motion.article>
	);
};

export default LuminariesCard;
