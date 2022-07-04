import React from "react";
import Avatar from "./Avatar";

type SmallAvatarsProps = {
	name: string;
	image?: string;
	label: string;
};

const SmallAvatars = ({ name, image, label }: SmallAvatarsProps) => {
	return (
		<div className='flex items-center gap-2'>
			<div className='flex -space-x-[5px]'>
				<Avatar
					image='/assets/icons/layouts/profile.png'
					name={name}
					size={24}
					border
				/>
				<Avatar
					image='/assets/images/square-avatar-1.png'
					name={name}
					size={24}
					border
				/>
				<Avatar
					image='/assets/icons/layouts/profile.png'
					name={name}
					size={24}
					border
				/>
				<Avatar
					image='/assets/images/square-avatar-1.png'
					name={name}
					size={24}
					border
				/>
			</div>
			<span className='text-sm text-dark-100 font-epilogue'>{label}</span>
		</div>
	);
};

export default SmallAvatars;
