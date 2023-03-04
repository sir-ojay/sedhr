import Avatar from "@/components/global/Avatar";
import Button from "@/components/global/Button";
import StatusPill from "@/components/global/StatusPill";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import { H2H } from "@/types/collaboration";
import { motion } from "framer-motion";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type H2HCardProps = {
	type?: string;
};

const H2HCard = ({
	type,
	createdAt,
	productDetails,
	_id,
	images,
	owner
}: H2HCardProps & H2H) => {
	const router = useRouter();

	return (
		<motion.article layout>
			<WhiteWrapper className='h-full flex flex-col justify-between space-y-5'>
				<div className='space-y-3'>
					<div className='flex gap-3 mb-3'>
						<Avatar
							href='/connection/1'
							shape='square'
							size={64}
							image={owner?.profilePicture}
							name={owner?.name}
						/>
						<div className='w-full flex justify-between '>
							<div>
								<Link
									href='/connection/1'
									className='font-semibold text-[#2A2069] hover:underline'>
									{owner?.name}
								</Link>
								{/* <div className='text-sm text-dark-400 font-normal font-epilogue text-[#4C4475]'>
									Dental clinics
								</div> */}
								<div className='text-sm text-accents-brown'>
									{owner?.accountType}
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
							className='w-full h-[350px] object-cover'
							src={
								images[0] === "cloudinary-link-here"
									? "/assets/images/collabo.jpg"
									: images[0]
							}
							width={341}
							height={192}
							// layout='responsive'
						/>
					</div>
					<div className='flex items-center gap-2'>
						<StatusPill
							text={productDetails.category}
							bg='#1AD48D1A'
							textColor='#1AD48D'
						/>
					</div>
					<div className='text-sm text-[#4C4475]'>
						Created {moment(createdAt).format("Dd, MMMM YYYY")}
					</div>
					<h4 className='font-semibold text-sm text-[#2A2069] hover:underline'>
						{productDetails.name}
					</h4>
					<div className='text-sm text-[#4C4475] line-clamp-4'>
						{productDetails.description}
					</div>
					<div className='text-sm text-[#4C4475]'>
						Quantity - {productDetails.quantity}
					</div>
				</div>
				<div className='flex items-center gap-5'>
					{type !== "cancel" && type !== "complete" && type !== "saved" && (
						<Button
							href='/connection/user-profile/2'
							className='w-full'
							theme='outline'
							onClick={() =>
								router.push(`/collaboration/sedher-h2h-commerce/${_id}`)
							}>
							View H2H
						</Button>
					)}
				</div>
			</WhiteWrapper>
		</motion.article>
	);
};

export default H2HCard;
