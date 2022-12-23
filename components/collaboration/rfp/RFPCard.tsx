import Avatar from "@/components/global/Avatar";
import Button from "@/components/global/Button";
import StatusPill from "@/components/global/StatusPill";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import { RFP } from "@/types/collaboration";
import { motion } from "framer-motion";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
	type?: "default" | "active" | "saved" | "complete";
};

const RFPCard = ({
	type = "default",
	description,
	productName,
	updatedAt,
}: Props & RFP) => {
	const router = useRouter();

	return (
		<motion.article layout>
			<WhiteWrapper>
				<div className='space-y-3'>
					<div className='flex gap-3'>
						<Avatar
							href='/connection/1'
							shape='square'
							size={54}
							name='Thomas clinics'
						/>
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
					</div>
					<hr />
					<div className='flex items-center gap-2'>
						<StatusPill text='Product' bg='#1AD48D1A' textColor='#1AD48D' />
						<span className='text-sm text-[#4C4475]'>
							{moment(updatedAt).format("DD, MMMM yy")}
						</span>
					</div>
					<h4 className='font-semibold text-sm text-[#2A2069] hover:underline'>
						{productName}
					</h4>
					<div className='text-sm text-[#4C4475]'>{description}</div>
					{type === "saved" ||
						(type === "default" && (
							<div className='flex items-center gap-5'>
								<Button
									href='/connection/user-profile/2'
									className='w-full'
									theme='outline'
									onClick={() =>
										router.push("/collaboration/rfp/thomas-clinics")
									}>
									View RFP
								</Button>
							</div>
						))}
				</div>
			</WhiteWrapper>
		</motion.article>
	);
};

export default RFPCard;
