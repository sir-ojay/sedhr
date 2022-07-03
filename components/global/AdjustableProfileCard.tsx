import Image from "next/image";
import React from "react";
import Avatar from "./Avatar";
import Button from "./Button";
import WhiteWrapper from "./WhiteWrapper";

type AdjustableProfileCardProps = {
	name: string;
	description: string;
	accountType: string;
	image?: string;
	cardType: "connect" | "page" | "event" | "group";
};

const AdjustableProfileCard = ({
	name,
	description,
	accountType,
	image = "",
	cardType,
}: AdjustableProfileCardProps) => {
	return (
		<WhiteWrapper>
			<div className='flex justify-between'>
				<div className='flex gap-6 items-center'>
					<Avatar image={image} name={name} size={64} />
					<div>
						<div className='space-y-2'>
							<div className='font-semibold text-dark-900'>{name}</div>
							<div className='flex items-center gap-2'>
								<div className='text-sm text-dark-100'>{description}</div>
								<svg
									width='4'
									height='4'
									viewBox='0 0 4 4'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<circle cx='2' cy='2' r='2' fill='#4C4475' />
								</svg>
								<div className='text-sm text-accents-brown'>{accountType}</div>
							</div>
							<div className='flex items-center gap-2'>
								<svg
									width='16'
									height='15'
									viewBox='0 0 16 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M8 0.5L9.79611 6.02786H15.6085L10.9062 9.44427L12.7023 14.9721L8 11.5557L3.29772 14.9721L5.09383 9.44427L0.391548 6.02786H6.20389L8 0.5Z'
										fill='#FAAD1F'
									/>
								</svg>
								<div className='text-sm font-semibold text-[#FAAD1F]'>
									4.9 <span className='text-dark-100 font-normal'>(25)</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='w-[164px] flex flex-col gap-3'>
					{cardType === "connect" && (
						<Button className='w-full'>Connect</Button>
					)}
					{cardType === "page" && <Button className='w-full'>Follow</Button>}
					<Button theme='outline' className='w-full'>
						Ignore
					</Button>
				</div>
			</div>
		</WhiteWrapper>
	);
};

export default AdjustableProfileCard;
