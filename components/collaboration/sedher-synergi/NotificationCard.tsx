import WhiteWrapper from "@/components/global/WhiteWrapper";
import React from "react";
import NotificationCardItem from "./NotificationCardItem";

const NotificationCard = () => {
	return (
		<WhiteWrapper>
			<h5 className='font-clash font-semibold text-lg text-dark-900'>
				Communication notification
			</h5>
			<div className='flex items-center pt-2 pb-5 gap-4 '>
				<div className='text-dark-100'>Sort by:</div>
				<div className='flex items-center gap-2 font-medium cursor-pointer'>
					Most Recent
					<svg
						width='16'
						height='17'
						viewBox='0 0 16 17'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M12.6663 6.16699L7.99967 10.8337L3.33301 6.16699'
							stroke='#1E5156'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
			</div>
			<hr className='pb-5' />
			<NotificationCardItem
				title='Instant message'
				description='Et dolor pellentesque.'
				time='12 minute ago'
				bgColor='#E3F2EC'
			/>
			<NotificationCardItem
				title='Message'
				description='Quis blandit orci id aliquam.'
				time='12 minute ago'
				bgColor='#D3CFF94D'
			/>
			<NotificationCardItem
				title='Audio Call'
				description='Euismod tempus interdum.'
				time='12 minute ago'
				bgColor='#F0D2D84D'
			/>
			<NotificationCardItem
				title='Video Call'
				description='Tellus vitae sed netus.'
				time='12 minute ago'
				bgColor='#D0E3F34D'
			/>
		</WhiteWrapper>
	);
};

export default NotificationCard;
