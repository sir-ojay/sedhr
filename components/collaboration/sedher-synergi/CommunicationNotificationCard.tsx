import Image from "next/image";
import React from "react";

const CommunicationNotificationCard = () => {
	return (
		<div className='bg-primary p-3'>
			<div>
				<Image
					width={24}
					height={24}
					// layout='responsive'
					src='/assets/icons/notify.svg'
					alt='notify'
				/>
			</div>
		</div>
	);
};

export default CommunicationNotificationCard;
