import Avatar from "@/components/global/Avatar";
import React from "react";

const LeftMessage = () => {
	return (
		<div className='flex  mb-4  space-x-6'>
			<Avatar
				size={44}
				name={"Jan Mayer"}
				shape='circle'
				image='/assets/icons/layouts/profile.png'
			/>
			<div className='max-w-sm  '>
				<h6 className=' font-semibold text-base py-2'>Jan Mayer </h6>
				<p className=' border border-[#D6DDEB] bg-white px-4 py-3'>
					Hi Maria, sure I would love to. Thanks for taking the time to see my
					work!
				</p>
				<p className='font-normal  py-2 text-base text-neutral-60'>
					12 mins ago
				</p>
			</div>
		</div>
	);
};

export default LeftMessage;
