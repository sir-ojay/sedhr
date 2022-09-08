import Avatar from "@/components/global/Avatar";
import Button from "@/components/global/Button";
import StatusPill from "@/components/global/StatusPill";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type SynergiCardProps = {
	type?: string;
	star?: boolean;
};

const SynergiCard = ({ type, star }: SynergiCardProps) => {
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
						<div className='w-full flex justify-between'>
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
							<div>
								{type === "active" && (
									<StatusPill
										text='active'
										bg='white'
										textColor='#1699F8'
										statusStyle='border border-[#1699F8] font-semibold font-archivo flex justify-between items-center '
									/>
								)}
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
								{type === "create" && (
									<StatusPill
										text='Active'
										bg='#1AD48D1A'
										textColor='#1AD48D'
										statusStyle=' font-semibold font-archivo flex justify-between items-center '
									/>
								)}
							</div>
						</div>
					</div>
					<div className='flex justify-between items-center gap-2'>
						<span className='text-sm text-[#4C4475]'>
							Distance <span className='text-[#FF3956]'>7KM</span>
						</span>
						<StatusPill text='Machine' bg='#1AD48D1A' textColor='#1AD48D' />
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
					<h4 className='font-semibold text-sm text-[#2A2069] hover:underline'>
						Quis amet rutrum sem.
					</h4>
					<div className='text-sm text-[#4C4475]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tempor
						semper amet, morbi. Egestas massa ac aliquam quam velit.
					</div>
					<div className='flex items-center gap-5'>
						<Button
							onClick={() =>
								router.push("/collaboration/sedher-synergi/gideon")
							}
							className='w-full'
							theme='outline'>
							{type === "create" ? "Edit Details" : "Book Appoinment"}
						</Button>
					</div>
				</div>
			</WhiteWrapper>
		</motion.article>
	);
};

export default SynergiCard;
