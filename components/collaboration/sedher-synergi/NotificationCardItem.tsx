import React from "react";

type NotificationCardItemProps = {
	title: string;
	description: string;
	time: string;
	bgColor: string;
};
const NotificationCardItem = ({
	title,
	description,
	time,
	bgColor,
}: NotificationCardItemProps) => {
	return (
		<div className='mb-3 rounded-xl ' style={{ backgroundColor: `${bgColor}` }}>
			<div className='flex items-center  space-x-5 px-4 py-4'>
				<div>
					<svg
						width='44'
						height='43'
						viewBox='0 0 44 43'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<circle
							cx='22'
							cy='21.5'
							r='21.5'
							fill='#6ABE9A'
							fillOpacity='0.15'
						/>
						<g clip-path='url(#clip0_2984_222478)'>
							<path
								d='M16.1666 16.6668H26.8333V24.6668H16.9466L16.1666 25.4468V16.6668ZM16.1666 15.3335C15.4333 15.3335 14.8399 15.9335 14.8399 16.6668L14.8333 28.6668L17.4999 26.0002H26.8333C27.5666 26.0002 28.1666 25.4002 28.1666 24.6668V16.6668C28.1666 15.9335 27.5666 15.3335 26.8333 15.3335H16.1666ZM17.4999 23.3335H25.4999V24.6668H17.4999V23.3335ZM17.4999 21.3335H25.4999V22.6668H17.4999V20.0002V21.3335ZM17.4999 19.3335H25.4999V20.6668H17.4999V18.0002V19.3335Z'
								fill='#6ABE9A'
							/>
						</g>
						<defs>
							<clipPath id='clip0_2984_222478'>
								<rect
									width='16'
									height='16'
									fill='white'
									transform='translate(13.5 14)'
								/>
							</clipPath>
						</defs>
					</svg>
				</div>
				<div>
					<h1 className='font-archivo font-medium text-lg'>{title}</h1>
					<p className='text-[#616A6A] text-sm font-normal'>{description}</p>
					<time className='text-[#F6513B]'>{time}</time>
				</div>
			</div>
		</div>
	);
};

export default NotificationCardItem;
